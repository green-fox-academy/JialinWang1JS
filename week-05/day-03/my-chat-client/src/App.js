import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMsgData, sendMsgData } from './redux'
import ChatWindow from './ChatWindow/ChatWindow'
import './App.css'

function App({ state, fetchData, sendData }) {
	const [text, setText] = useState('')
	let { messages, sendRecords } = state
	useEffect(() => {
		fetchData()
	}, [sendRecords])

	const handleTextAreaChange = text => setText(text)
	const handleSendClick = async () => {
    sendData('Garrin', text)
    setText('')
	}
	return (
		<div className='App'>
			<ChatWindow
				messages={messages.sort(function(a, b) {
					return a.id - b.id
				})}
			/>
			<textarea className="text-input" value={text} onChange={event => handleTextAreaChange(event.target.value)} />
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
