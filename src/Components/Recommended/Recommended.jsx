// Recommended.jsx
import React from "react";
import { Link } from "react-router-dom";
import style from "./Recommended.module.scss";
import deadpool from "../Image/deadpool.jpg";
import blackWidow from "../Image/black_widow.webp";
import avengers from "../Image/avengers.jpg";
import ageOfUltron from "../Image/ageOfUltron.jpg";
import infinityWar from "../Image/infinityWar.jpg";

const Recommended = () => {
  return (
    <div className={style.recommended}>
      <div className={style.recFilms}>
        <Link to="/movie" className={style.deadpool}>
          <img src={deadpool} alt="Deadpool" className={style.image} />
          Deadpool & Wolverine
        </Link>
        <a href="#" className={style.blackWidow}>
          <img src={blackWidow} alt="Black Widow" className={style.image} />
          Black Widow
        </a>
        <a href="#" className={style.avengers}>
          <img src={avengers} alt="Avengers" className={style.image} />
          Avengers
        </a>
        <a href="#" className={style.avengers}>
          <img
            src={ageOfUltron}
            alt="Avengers Age Of Ultron"
            className={style.image}
          />
          Avengers Age Of Ultron
        </a>
        <a href="#" className={style.avengers}>
          <img
            src={infinityWar}
            alt="Avengers Infinity War"
            className={style.image}
          />
          Avengers Infinity War
        </a>
      </div>
      <div className={style.genres}>
        <a href="#">БИОГРАФИЯ</a>
        <a href="#">БОЕВИКИ</a>
        <a href="#">ВЕСТЕРН</a>
        <a href="#">ВОЕННЫЕ</a>
        <a href="#">ДОКУМЕНТАЛЬНЫЕ</a>
        <a href="#">ДЕТЕКТИВЫ</a>
        <a href="#">ИСТОРИЧЕСКИЕ</a>
        <a href="#">КОМЕДИИ</a>
        <a href="#">КРИМИНАЛ</a>
        <a href="#">МЕЛОДРАМЫ</a>
        <a href="#">МУЛЬТФИЛЬМЫ</a>
        <a href="#">ПРИКЛЮЧЕНИЯ</a>
        <a href="#">СЕМЕЙНЫЕ</a>
        <a href="#">СПОРТИВНЫЕ</a>
        <a href="#">ТРИЛЛЕР</a>
        <a href="#">УЖАСЫ</a>
        <a href="#">ФАНТАСТИКА</a>
        <a href="#">СЕРИАЛЫ</a>
      </div>
      <div className={style.cast}>
        <a href="#">Актеры</a>
        <a href="#">Режисер</a>
        <a href="#">Страна</a>
        <a href="#">Год</a>
      </div>
    </div>
  );
};

export default Recommended;
