import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';import Aside from "../Aside/Aside";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import style from "./styles/Main.module.css";

const Main = () => {
  return (
    <BrowserRouter>
    <div className={`${style.Main} container-fluid`}>
      <div className="row d-flex">
        <Aside></Aside>
        <Routes>
          <Route path="/Profile" element={<Profile></Profile>}></Route>
          <Route path="/Dialogs" element={<Dialogs></Dialogs>}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default Main;
