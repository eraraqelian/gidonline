import React from "react";
import style from "./Container.module.scss";
import logo from "../Logo/gidonlines.png";
const Container = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={logo} alt="" />
        <div>
          <input type="text" placeholder="Назваине Фильма" />
          <button>поиск</button>
        </div>
      </div>
    </div>
  );
};

export default Container;
