import React from 'react'
import "./widgetSm.css";
import {Visibility} from "@material-ui/icons";
const WidgetSm = () => {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">Yeni Üyeler</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://mui.com/static/images/avatar/3.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Emre Yasin Şallı</span>
                    <span className="widgetSmUserTitle">Yazılım Mühendisi</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/> 
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://mui.com/static/images/avatar/3.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Emre Yasin Şallı</span>
                    <span className="widgetSmUserTitle">Yazılım Mühendisi</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/> 
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://mui.com/static/images/avatar/3.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Emre Yasin Şallı</span>
                    <span className="widgetSmUserTitle">Yazılım Mühendisi</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/> 
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://mui.com/static/images/avatar/3.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Emre Yasin Şallı</span>
                    <span className="widgetSmUserTitle">Yazılım Mühendisi</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/> 
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://mui.com/static/images/avatar/3.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Emre Yasin Şallı</span>
                    <span className="widgetSmUserTitle">Yazılım Mühendisi</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm