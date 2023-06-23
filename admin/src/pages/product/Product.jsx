import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "./../../components/chart/Chart";
import { productData } from "./../../dummyData";
import { Publish } from "@mui/icons-material";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Ürün</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Oluştur</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Satış Performansı" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1551489684370"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">stokta:</span>
              <span className="productInValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Ürün Adı</label>
            <input type="text" name="" id="" />
            <label>Stok</label>
            <select name="inStock" id="inStock">
              <option value="yes">Evet</option>
              <option value="no">Hayır</option>
            </select>

            <label>Aktif</label>
            <select name="active" id="active">
              <option value="yes">Evet</option>
              <option value="no">Hayır</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1551489684370"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Güncelle</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
