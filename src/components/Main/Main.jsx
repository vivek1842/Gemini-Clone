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
                    <p>Suggest best story games to play on latest PS5 Pro</p>
                    <img src={assets.message_icon} alt="compass icon not found" />
                </div>
                <div className="card">
                    <p>Improve performance of the following code</p>
                    <img src={assets.code_icon} alt="compass icon not found" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="gallery icon not found" />
                        <img src={assets.mic_icon} alt="mic icon not found" />
                        <img src={assets.send_icon} alt="send icon not found" />
                    </div>
                    <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. <a href="https://support.google.com/gemini/answer/13594961?visit_id=638617636113328241-3788869149&p=privacy_notice&rd=1#privacy_notice">Your privacy and Gemini Apps</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Main