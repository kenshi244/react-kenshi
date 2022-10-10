import React from "react";
import logo from "../logo.svg";
import style from "./styles/Header.module.css";

const Header = () => {
  return (
    <header className={style.Header}>
      <div className="container-fluid p-0 m-0 d-flex">
        <img src={logo} alt="Logo" className={style.Header__logo} />
        <span> Kenshi </span>
      </div>
    </header>
  );
};

export default Header;
