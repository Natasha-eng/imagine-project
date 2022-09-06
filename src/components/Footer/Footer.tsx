import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";

import whiteLogo from "./../../assets/LogoImagineWhite.png";
import style from "./footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={style.footerContainer}>
        <div className={style.logo}>
          <img src={whiteLogo} alt="logo" className={style.logoImg} />
          <a href="#" className={`${style.offer} ${style.footerLink}`}>
            Contract offer
          </a>
          <a href="#" className={style.footerLink}>
            Card payment rules
          </a>
        </div>
        <div className={style.contacts}>
          <div className={style.mail}>
            <a href="#" className={`${style.imagine} ${style.footerLink}`}>
              imagine.com
            </a>
            <a href="#" className={style.footerLink}>
              info@imagine.com
            </a>
            <div className={style.rights}>
              <AiOutlineCopyrightCircle />
              IMAGINE 2021. All rights Reserved
            </div>
          </div>
          <div className={style.icons}>
            <RiFacebookFill className={style.icon} />
            <AiOutlineInstagram className={style.icon} />
            <FaWhatsapp className={style.icon} />
          </div>
        </div>
      </div>
    </footer>
  );
};
