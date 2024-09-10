import React from "react";
import style from "./ModalRegister.module.scss";
import logo from "../Logo/gidonlines.png";

const ModalRegister = ({ onClose }) => {
  return (
    <div className={style.modalBackground} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <div className={style.btn}>
          <button onClick={onClose}>x</button>
        </div>
        <div className={style.modalContent}>
          <h2>Register</h2>
          <p>Name</p>
          <input type="text" placeholder="Antony" />
          <p>Surname</p>
          <input type="text" placeholder="Stark" />
          <p>Email</p>
          <input type="email" placeholder="tonystark@gmail.com" />
          <p>Password</p>
          <input type="password" placeholder="Password" />
          <button>Submit</button>
        </div>
        <div className={style.logo}>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
