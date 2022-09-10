import React from 'react'
import "./newProduct.css";


const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Yeni Ürün</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Fotoğraf</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Ürün Adı</label>
          <input type="text"/>
        </div>
        <div className="addProductItem">
          <label>Stok</label>
          <input type="text" />
        </div>
        <div className="addProductItem">
          <label>Aktif</label>
          <select name="active" id="active">
            <option value="yes">Evet</option>
            <option value="no">Hayır</option>
          </select>
        </div>
        <button className="addProductButton">Oluştur</button>
      </form>
    </div>
  )
}

export default NewProduct
