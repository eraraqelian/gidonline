import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>
        ГидОнлайн <span>- Твой гид в мире кино! © gidonline.one ♦</span>{" "}
      </p>
      <a href="">Правообладателям ♦ </a>
      <a href="">Контакты ♦ </a>
    </div>
  );
};

export default Footer;
