import React from 'react'
import './homepage.css'
import { TypeAnimation } from 'react-type-animation'
import { Link } from "react-router-dom"
const Homepage = () => {
  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className='orbital'/>
      <div className="left">
        <h1>LUCKY AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          An AI chatbot uses natural language processing to interact with users, providing 
          information and assistance automatically. 
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      {<div className="right">
          <div className="imgContainer">
            <div className="bgContainer">
              <div className="bg"></div>
            </div>
            <img src="/bot3.png" alt="" className='bot'/>
            <div className="chat">
            <img src="/bot2.png" alt="" />
                <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'I AM LUCKY AI 🤖 HOW CAN I HELP YOU .',
                  1500, // wait 1s before replacing "Mice" with "Hamsters"
                  'Offer 24/7 assistance⌚.',
                  1500,
                  'Natural language processing based conversation📃',
                  1500,
                  'Personalized interactions through AI chatbots 💬',
                  1500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor = {true}
                omitDeletionAnimation={true} 
              />
            </div>
          </div>
      </div>}
      <div className="terms">
          <img src="/logo.png" alt="" />
          <div className="links">
                <Link to="/">Terms of Service</Link>
                <Link to="/">Privacy Policy</Link>
          </div>
          <p style={{fontSize : "12px" , fontWeight : "bold", color : "purple"}}>Made with ❤️ By Lucky</p>
      </div>
    </div>
  )
}

export default Homepage