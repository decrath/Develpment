import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";
import Users from "./components/pages/user/User";
import Position from "./components/pages/position/Position";

function App() {
  return (
    <div>
      <Header />
      <Home/>
      <Users/>
      <Position />

    </div>
  );
}

export default App;
