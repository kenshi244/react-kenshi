import React from "react";
import style from "./styles/Aside.module.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className={`${style.Aside} p-3 col-2`}>
      <ul>
        <li className={`${style.li} ${style.active}`}>
          <Link to="/profile">Профиль</Link>
        </li>
        <li className={`${style.li}`}>
          <Link to="/dialogs">Сообщения</Link>
        </li>
        <li className={`${style.li}`}>
          <a href="/News">Новости</a>
        </li>
        <li className={`${style.li}`}>
          <a href="/Music">Музыка</a>
        </li>
        <li className={`${style.li}`}>
          <a href="/Settings">Настройки</a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
