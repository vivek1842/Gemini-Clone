// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt="menu icon not found" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="plus icon is not found" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-tile">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="message icon not found" />
                    <p>What is react....</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="quetion icon not found" />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="history icon not found" />
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="setting icon not found" />
                <p>Settings</p>
            </div>
        </div>
    </div>
  )
}
