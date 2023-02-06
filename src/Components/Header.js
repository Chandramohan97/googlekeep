import React from "react";
import menu from "../Assets/menu.png";
import logo from "../Assets/icon_googleKeep.png";
import "../Assets/Header.css";

const Header = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li>
            <img src={menu} alt="bar" />
          </li>

          <li style={{ color: "white" }}>
            <img src={logo} alt="logo" /> ToDo List
          </li>
          <li style={{ color: "white" }}>
            <input type="text" placeholder="Search"></input>
          </li>
        </ul>
      </nav>
      <hr id="line" />
    </>
  );
};

export default Header;
