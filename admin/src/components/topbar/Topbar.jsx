import React from 'react'
import "./topbar.css";
import {NotificationsNone,Language,Settings} from "@material-ui/icons";
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
            <Link to="/" className="link">
              <span className="logo">beemadmin</span>
            </Link>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Language/>
            </div>
            <div className="topbarIconContainer">
                <Settings/>
            </div>
            <img src="https://mui.com/static/images/avatar/3.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
