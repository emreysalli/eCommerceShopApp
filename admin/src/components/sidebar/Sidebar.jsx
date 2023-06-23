import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Kontrol Paneli</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" /> Ana Sayfa
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analitik
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" /> Satışlar
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Kısa Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" /> Kullanıcılar
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" /> Ürünler
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" /> İşlemler
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" /> Raporlar
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Bildirimler</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" /> Geri Bildirim
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" /> Mesajlar
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Destek</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" /> Yönetim
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Analitikler
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" /> Raporlar
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
