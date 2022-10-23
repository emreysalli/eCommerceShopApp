import React from "react";
import Sidebar from "./../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "./../topbar/Topbar";

const PageLayout = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
