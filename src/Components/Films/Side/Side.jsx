import React, { useState } from "react";
import style from "./Side.module.scss";
import nartuo from "./Image/naruto.jpg";
import shipuden from "./Image/shipuden.jpg";
import ModalRegister from "../../ModalRegister/ModalRegister";

const Side = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={style.sideContainer}>
      <div className={style.register}>
        <button onClick={openModal}>
          <p>Register</p>
        </button>
      </div>
      <div className={style.sideFilms}>
        <div className={style.sideTitle}>
          <h3>Рекомендуемые фильмы </h3>
        </div>
        <div className={style.films}>
          <a href="#" className={style.deadpool}>
            <img src={nartuo} alt="Naruto" className={style.image} />
            Naruto
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
          <a href="#" className={style.deadpool}>
            <img src={nartuo} alt="Naruto" className={style.image} />
            Naruto
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
          <a href="#" className={style.deadpool}>
            <img src={nartuo} alt="Naruto" className={style.image} />
            Naruto
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
          <a href="#" className={style.deadpool}>
            <img src={nartuo} alt="Naruto" className={style.image} />
            Naruto
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
          <a href="#" className={style.deadpool}>
            <img src={nartuo} alt="Naruto" className={style.image} />
            Naruto
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
          <a href="#" className={style.deadpool}>
            <img src={nartuo} alt="Naruto" className={style.image} />
            Naruto
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
        </div>
        <div className={style.sideTitle}>
          <h3>Рекомендуемые фильмы </h3>
        </div>
        <div className={style.films}>
          <a href="#" className={style.deadpool}>
            <img src={shipuden} alt="Naruto Shipuden" className={style.image} />
            Naruto Shipuden
            <p>-</p>
            {/* Оценка */}
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
          <a href="#" className={style.deadpool}>
            <img src={shipuden} alt="Naruto Shipuden" className={style.image} />
            Naruto Shipuden
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
          </a>{" "}
          <a href="#" className={style.deadpool}>
            <img src={shipuden} alt="Naruto Shipuden" className={style.image} />
            Naruto Shipuden
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
          </a>{" "}
          <a href="#" className={style.deadpool}>
            <img src={shipuden} alt="Naruto Shipuden" className={style.image} />
            Naruto Shipuden
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
          </a>{" "}
          <a href="#" className={style.deadpool}>
            <img src={shipuden} alt="Naruto Shipuden" className={style.image} />
            Naruto Shipuden
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
          </a>{" "}
          <a href="#" className={style.deadpool}>
            <img src={shipuden} alt="Naruto Shipuden" className={style.image} />
            Naruto Shipuden
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
        </div>
      </div>

      {isModalOpen && <ModalRegister onClose={closeModal} />}
    </div>
  );
};

export default Side;
