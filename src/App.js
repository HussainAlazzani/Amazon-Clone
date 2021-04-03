import React from "react";
import Header from "./Header.js";
import Home from "./Home.js";
import './App.css';


function App() {
  return (
    // BEM convention
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
