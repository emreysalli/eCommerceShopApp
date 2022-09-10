import React from 'react'
import "./user.css";
import {PermIdentity,CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from "@material-ui/icons";
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Kullanıcı Düzenle</h1>
            <Link to="/newuser">
                <button className="userAddButton">Oluştur</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://mui.com/static/images/avatar/2.jpg" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Emre Yasin Şallı</span>
                        <span className="userShowUserTitle">Yazılım mühendisi</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Hesap Detayları</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">emreysalli</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">06.07.2000</span>
                    </div>
                    <span className="userShowTitle">İletişim Detayları</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">05467892334</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">emreysalli@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Istanbul | Turkey</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Düzenle</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Kullanıcı Adı</label>
                            <input type="text" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Ad Soyad</label>
                            <input type="text" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Telefon</label>
                            <input type="text" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Adres</label>
                            <input type="text" className="userUpdateInput" />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className="userUpdateImg" src="https://mui.com/static/images/avatar/2.jpg" alt="" />
                            <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Güncelle</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User