import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMsgData, sendMsgData } from './redux'
import ChatWindow from './ChatWindow/ChatWindow'
import './App.css'

const USER = 'Garrin'

function App({ state, fetchData, sendData }) {
	const [text, setText] = useState('')

	let { messages, sendRecords } = state
	useEffect(() => {
		setInterval(() => fetchData(), 5000)
		fetchData()
	}, [sendRecords])

	const handleTextAreaChange = text => setText(text.replace(/[\r\n]/g, ''))
	const handleEnter = event => {
		if (event.keyCode === 13 && text !== '') {
			sendData(USER, text)
			setText('')
		}
	}
	const handleSendClick = async () => {
		sendData(USER, text)
		setText('')
	}
	return (
		<div className='App'>
			<ChatWindow
				messages={messages.sort(function(a, b) {
					return a.id - b.id
				})}
			/>
			<textarea
				onKeyDown={handleEnter}
				className='text-input'
				value={text}
				onChange={event => handleTextAreaChange(event.target.value)}
			/>
			<p />
			<button onClick={handleSendClick}>Send</button>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		state
	}
}
const mapDispatchToProps = dispatch => {
	return {
		fetchData: () => dispatch(fetchMsgData()),
		sendData: (name, text) => dispatch(sendMsgData(name, text))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
