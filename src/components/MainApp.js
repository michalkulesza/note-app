import React from "react";
import "./MainApp.scss";
import MainPanel from "./MainPanel";
import SidePanel from "./SidePanel";

const MainApp = () => {
  return (
    <div className="MainApp">
      <SidePanel />
      <MainPanel />
    </div>
  );
};

export default MainApp;
