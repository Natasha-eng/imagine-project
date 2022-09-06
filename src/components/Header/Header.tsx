import React from "react";
import style from "./header.module.css";
import { GrHomeRounded } from "react-icons/gr";
import { BsChatDots } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import userPic from "../../assets/Userpic.jpg";
import logo from "../../assets/LogoImagine.png";
import arrow from "./../../assets/headerArrow.png";

export const Header = () => {
  return (
    <header className={style.headerContainer}>
      <div className={style.header}>
        <img className={style.logo} src={logo} alt="logo imagine" />
        <div className={style.iconsContainer}>
          <GrHomeRounded className={style.icon} />
          <BsChatDots className={style.icon} />
          <FiSettings className={style.icon} />
          <img className={style.icon} alt="photo" src={userPic} />
          <div className={style.langContainer}>
            <div className={`${style.lang}`}>ENG</div>
            <img src={arrow} alt="arrow" className={style.headerArrow} />
          </div>
        </div>
      </div>
    </header>
  );
};
