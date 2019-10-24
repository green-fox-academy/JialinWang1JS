import React, { useEffect } from 'react'
import Message from '../Message/Message'
import './ChatWindow.css'
export default function ChatWindow({ messages }) {
	let chatRef = React.createRef()
	useEffect(() => {
		let chatWindow = chatRef.current

		chatWindow.scrollTop = chatWindow.scrollHeight - chatWindow.clientHeight
	}, [])
	return (
		<div ref={chatRef} className='chat-window'>
			{messages.map(message => {
				return <Message key={message.id} message={message} />
			})}
		</div>
	)
}
