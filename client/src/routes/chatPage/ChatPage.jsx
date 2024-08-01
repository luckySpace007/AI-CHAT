import React, { useEffect, useRef } from 'react'
import './chatPage.css'
import NewPrompt from "../../components/newPrompt/NewPrompt"
const ChatPage = () => {

  
  

  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className="chat">
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from user</div>
          <div className="message">Text Message from AI</div>
          <div className="message user">Text Message from user</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  )
}

export default ChatPage