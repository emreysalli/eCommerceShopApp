import React from 'react'
import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Yeni Kullanıcı</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label >Kullanıcı Adı</label>
          <input type="text"/>
        </div>
        <div className="newUserItem">
          <label >Ad Soyad</label>
          <input type="text"/>
        </div>
        <div className="newUserItem">
          <label >Email</label>
          <input type="text"/>
        </div>
        <div className="newUserItem">
          <label >Şifre</label>
          <input type="text"/>
        </div>
        <div className="newUserItem">
          <label >Telefon</label>
          <input type="text"/>
        </div>
        <div className="newUserItem">
          <label >Adres</label>
          <input type="text"/>
        </div>
        <div className="newUserItem">
          <label >Cinsiyet</label>
          <div className="newUserGender">  
            <input type="radio" name="gender" id="kadın" value="kadın"/>
            <label for="kadın">Kadın</label>
            <input type="radio" name="gender" id="erkek" value="erkek"/>
            <label  for="erkek">Erkek</label>
            <input type="radio" name="gender" id="diğer" value="diğer"/>
            <label  for="diğer">Diğer</label>
          </div>
        </div>
        <div className="newUserItem">
          <label >Aktif</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Evet</option>
            <option value="no">Hayır</option>
          </select>
        </div>
        <button className="newUserButton">Oluştur</button>
      </form>
    </div>
  )
}

export default NewUser