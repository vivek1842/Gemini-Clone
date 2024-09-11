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
    </div>
  )
}


export default Main