import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
