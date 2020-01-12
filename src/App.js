import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import MainApp from "./components/MainApp";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MainApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
