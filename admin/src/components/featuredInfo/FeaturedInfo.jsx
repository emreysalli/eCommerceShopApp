import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Gelir</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415 ₺</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featureSub">Geçen aya kıyasla</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Satışlar</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4,415 ₺</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featureSub">Geçen aya kıyasla</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Maliyet</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415 ₺</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featureSub">Geçen aya kıyasla</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
