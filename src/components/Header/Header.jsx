import React from "react";
import logo from "../../logo.svg";
import style from "./styles/Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navigateToStart = () => {
    navigate("/Start");
  };
  return (
    <header className={style.Header}>
      <div className="container-fluid p-0 m-0 d-flex" onClick={navigateToStart}>
        <img src={logo} alt="Logo" className={style.Header__logo} />
        <span> Kenshi </span>
      </div>
    </header>
  );
};

export default Header;
