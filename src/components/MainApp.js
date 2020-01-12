import React, { Component } from "react";
import MainPanel from "./MainPanel";
import SidePanel from "./SidePanel";

class MainApp extends Component {
  render() {
    return (
      <div className="MainApp">
        <SidePanel />
        <MainPanel />
      </div>
    );
  }
}

export default MainApp;
