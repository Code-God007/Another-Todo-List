import React from "react";
import logo from "./logo.svg";

export default function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <p>TODO APP </p>
      </header>
    </div>
  );
}
