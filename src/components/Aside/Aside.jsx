import React from "react";
import style from "./styles/Aside.module.css";
import { Link } from "react-router-dom";

const Aside = () => {
  const setActive = (e) => {
    const li = document.querySelectorAll("aside li");
    for (let i = 0; i < li.length; i++) {
      li[i].classList.remove(style.active);
    }

    e.currentTarget.classList.add(style.active);
  };

  return (
    <aside className={`${style.Aside} p-3 col-2`}>
      <ul>
        <li className={`${style.li}`} onClick={setActive}>
          <Link to="/Profile">Профиль</Link>
        </li>
        <li className={`${style.li}`} onClick={setActive}>
          <Link to="/Dialogs">Сообщения</Link>
        </li>
        <li className={`${style.li}`} onClick={setActive}>
          <Link to="/News">Новости</Link>
        </li>
        <li className={`${style.li}`} onClick={setActive}>
          <Link to="/Music">Музыка</Link>
        </li>
        <li className={`${style.li}`} onClick={setActive}>
          <Link to="/Settings">Настройки</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
