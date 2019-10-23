import React from 'react'
import './Message.css'
export default function Message({message}) {
  let { id, user, text, createdAt } = message
  return (
    <div className="message">
      {`${user} say: ${text} at ${createdAt}`}
    </div>
  )
}