import React from "react";
import logo from "../../logo.svg";
import style from "./styles/Start.module.css";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../AnimatedPage";

const Start = () => {
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate("/Profile");
  };

  return (
    <div className={`${style.Start} col-10`}>
      <AnimatedPage>
        <h1 className={style.Start__h1}>
          Социальная сеть, созданная на фреймворке React — Kenshi
        </h1>

        <div className={style.Start__logoContainer}>
          <img src={logo} alt="React logo" />

          <h2 className={style.Start__h2}>
            React — JavaScript-библиотека с открытым исходным кодом для
            разработки пользовательских интерфейсов. React разрабатывается и
            поддерживается Facebook, Instagram и сообществом отдельных
            разработчиков и корпораций. React может использоваться для
            разработки одностраничных и мобильных приложений.
          </h2>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className={`${style.Start__button} btn btn-dark`}
            onClick={navigateToProfile}
          >
            Мой профиль
          </button> 
        </div>
      </AnimatedPage>
    </div>
  );
};

export default Start;
