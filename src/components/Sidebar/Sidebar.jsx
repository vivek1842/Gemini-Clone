/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

export const Sidebar = () => {
  const [extented, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=> setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="menu icon not found"/>
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus icon is not found" />
          {extented ? <p>New Chat</p> : null}
        </div>
        {extented ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="message icon not found" />
              <p>What is react....</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="quetion icon not found" />
          {extented ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history icon not found" />
          {extented ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting icon not found" />
          {extented ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};
