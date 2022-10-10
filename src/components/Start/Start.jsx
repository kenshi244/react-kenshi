import React from "react";
import logo from "../../logo.svg";
import style from "./styles/Start.module.css";

const Start = () => {
  return (
    <div className={`${style.Start} col-11`}>
      <h1 className={style.Start__h1}>
        Социальная сеть, созданная на фреймворке React — Kenshi
      </h1>

      <div className={style.Start__logoContainer}>
        <img src={logo} alt="React logo" />

        <h2 className={style.Start__h2}>
          React — JavaScript-библиотека с открытым исходным кодом для разработки
          пользовательских интерфейсов. React разрабатывается и поддерживается
          Facebook, Instagram и сообществом отдельных разработчиков и
          корпораций. React может использоваться для разработки одностраничных и
          мобильных приложений.
        </h2>
      </div>

      <button className={`${style.Start__button} btn btn-dark`}>
        Мой профиль
      </button>
    </div>
  );
};

export default Start;
