/* eslint-disable no-unused-vars */
import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

export const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user icon not found" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Vivek</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Best places in japan to visit in spring season</p>
                    <img src={assets.compass_icon} alt="compass icon not found" />
                </div>
                <div className="card">
                    <p>Explain react hooks with example</p>
                    <img src={assets.bulb_icon} alt="compass icon not found" />
                </div>
                <div className="card">
                    <p>Suggest best story games to play on latest ps5 pro</p>
                    <img src={assets.message_icon} alt="compass icon not found" />
                </div>
                <div className="card">
                    <p>Improve performance of the following code</p>
                    <img src={assets.code_icon} alt="compass icon not found" />
                </div>
            </div>
        </div>
    </div>
  )
}


export default Main