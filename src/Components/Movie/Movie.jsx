// Movie.jsx
import React from "react";
import style from "./Movie.module.scss";
import Container from "../Container/Container";
import Recommended from "../Recommended/Recommended";
import deadpool from "../Image/deadpool.jpg";
import trailer from "./Video/deadpool.mp4";
import Side from "../Films/Side/Side";
import Footer from "../Footer/Footer";

const Movie = () => {
  return (
    <div className={style.movieContainer}>
      <Container />
      <Recommended />
      <div className={style.container}>
        <div className={style.film}>
          <div className={style.theFilm}>
            <img src={deadpool} alt="Deadpool" />
            <div className={style.title}>
              <div className={style.name}>
                <p>Название</p>
                <p>Deadpool and Wolverine</p>
              </div>
              <div className={style.year}>
                <p>Год</p>
                <p>2024</p>
              </div>
              <div className={style.name}>
                <p>Страна</p>
                <p>США</p>
              </div>
              <div className={style.year}>
                <p>Жанр</p>
                <p>Фантастика/Комедия/Боевик</p>
              </div>
              <div className={style.name}>
                <p>Время</p>
                <p>(2 ч 7 мин)</p>
              </div>
              <div className={style.year}>
                <p>Режиссер</p>
                <p>Шон Леви</p>
              </div>
              <div className={style.name}>
                <p>Актеры</p>
                <p>Ryan Reynolds / Hugh Jackman</p>
              </div>
            </div>
          </div>
          <div className={style.about}>
            <h3>Про Фильм</h3>
            <p className={style.aboutFilm}>
              Прошлое Уэйда Уилсона было непростым. Ему практически удалось
              одолеть рак – тот навсегда стал частью тела говорливого наемника,
              но не был способен уничтожить своего носителя. Получилось спасти
              возлюбленную от смерти, заручиться поддержкой верных друзей.
              Казалось, жизнь начала налаживаться. Но внезапно на пороге
              скромной квартиры Уэйда объявились странные личности. Они заявили,
              что являлись представителями тайной организацией, следившей за
              различными временными аномалиями.
            </p>
            <p className={style.aboutFilm}>
              От них наемный убийца узнал, что на самом деле во Вселенной
              существовало множество альтернативных миров. И часть из них
              оказалась под угрозой тотального уничтожения. Только Дэдпул мог
              спасти гигантское количество невинных людей от гибели, что
              заставило Уилсона снова облачиться в свой обтягивающий красный
              костюм, вооружиться пистолетами, катанами, гранатами и отправиться
              на спасение мультивселенной. Но в одиночку саркастичный герой не
              мог выстоять против могучих соперников. Ему требовалась помощь, и
              оказать ее был способен только Росомаха.
            </p>
            <p className={style.aboutFilm}>
              Тот пребывал не в лучшем состоянии. По вине Логана был разрушен
              его мир, а все, кто был ему близок, погибли. Бывшему члену команды
              Людей Икс оставалось влачить жалкое существование, напиваясь в
              небольших барах и оплакивая свои ошибки. Неунывающий же Дэдпул,
              твердо решивший выполнить смертельно опасную миссию, своими
              шуточками, непрекращающимися издевками и отважными поступками
              заставил Логана вновь превратиться в Росомаху, чтобы вместе с ним
              приняться избивать коварных злодеев и их подручных-фанатиков.
            </p>
          </div>
          <div className={style.watch}>
            <h2>DEADPOOL AND WOLVERINE</h2>
            <p>Смотреть</p>
            <video controls width="100%" height="auto">
              <source src={trailer} type="video/mp4" />
              Ваш браузер не поддерживает видео тег.
            </video>
          </div>
        </div>
        <Side />
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
