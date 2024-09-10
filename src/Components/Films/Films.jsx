import React from "react";
import style from "./Films.module.scss";
import theWolf from "./ImageFilms/wolf.jpg";
import endGame from "./ImageFilms/endgame.jpg";
import culpaMia from "./ImageFilms/myFault.jpg";
import caribeanSea from "./ImageFilms/pirates.jpg";
import johnWick from "./ImageFilms/wick.jpg";
import theFast from "./ImageFilms/fast.jpg";
import player from "./ImageFilms/player.jpg";
import ventana from "./ImageFilms/ventana.jpg";
import spiderMan from "./ImageFilms/spider.jpg";
import casa from "./ImageFilms/laCasa.jpg";
import elite from "./ImageFilms/elite.jpg";
import tulsaKing from "./ImageFilms/tulsaKing.jpg";
import Side from "./Side/Side";

const Films = () => {
  return (
    <div className={style.filmsContainer}>
      {" "}
      <div className={style.films}>
        <div className={style.title}>
          <h2>
            <span>Г</span>идонлайн фильмы новинки смотреть онлайн{" "}
          </h2>
        </div>
        <div className={style.watch}>
          <a href="#" className={style.theWolf}>
            <img src={endGame} alt="Deadpool" className={style.image} />
            Avengers ENDGAME
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </a>
          <a href="#" className={style.theWolf}>
            <img src={theWolf} alt="Deadpool" className={style.image} />
            The Wolf of Wall Street
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
            <span>☆</span>
          </a>
          <a href="#" className={style.theWolf}>
            <img src={culpaMia} alt="Deadpool" className={style.image} />
            Culpa Mia
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </a>
          <a href="#" className={style.theWolf}>
            <img src={caribeanSea} alt="Deadpool" className={style.image} />
            Pirates the Caribean Sea
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </a>
          <a href="#" className={style.theWolf}>
            <img src={johnWick} alt="Deadpool" className={style.image} />
            John Wick
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </a>
          <a href="#" className={style.theWolf}>
            <img src={theFast} alt="Deadpool" className={style.image} />2 Fast 2
            Furious
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
            <span>☆</span>
          </a>
          <a href="#" className={style.theWolf}>
            <img src={player} alt="Deadpool" className={style.image} />
            Free guy
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
            <span>☆</span>
          </a>
          <a href="#" className={style.theWolf}>
            <img src={ventana} alt="Deadpool" className={style.image} />A Traves
            De Mi Ventana
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
            <span>☆</span>
          </a>
          <a href="#" className={style.theWolf}>
            <img src={spiderMan} alt="Deadpool" className={style.image} />
            Spider Man No Way Home
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
            <span>☆</span>
          </a>
          <a href="#" className={style.theWolf}>
            <img src={casa} alt="Deadpool" className={style.image} />
            La Casa De Papel
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
          </a>
          <a href="#" className={style.theWolf}>
            <img src={elite} alt="Deadpool" className={style.image} />
            Elite
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
          </a>
          <a href="#" className={style.theWolf}>
            <img src={tulsaKing} alt="Deadpool" className={style.image} />
            Tulsa King
            <p>-</p>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆</span>
          </a>
        </div>
        <div className={style.pages}>
          <a href="">назад</a>
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
          <a href="">4</a>
          <a href="">5</a>
          <a href="">6</a>
          <a href="">7</a>
          <a href="">8</a>
          <a href="">9</a>
          <a href="">10</a>
          <a href="">вперёд</a>
        </div>
      </div>
      <Side />
    </div>
  );
};

export default Films;
