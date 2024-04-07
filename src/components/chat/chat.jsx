import "./chat.css";
import chat from "../../images/chat.png";
import close from "../../images/close.png";
import tg from "../../images/telegram.svg";
import wu from "../../images/whatsapp.svg";
import vk from "../../images/vk.svg";
import insta from "../../images/instagram.svg";

import { useEffect, useRef, useState } from "react";

export default function Chat() {
  const [isClicked, setIsClicked] = useState(false);
  const menu = useRef();

  const openMenu = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className={`chat`} onClick={openMenu}>
      {/* <p className={`chat__title ${isClicked ? "chat_open" : ""}`}>
        СВЯЗАТЬСЯ С НАМИ
      </p> */}
      <img
        src={`${isClicked ? close : chat}`}
        alt="Связаться с нами"
        className={`chat__icon ${isClicked ? "chat__icon_open" : ""}`}
      />
      <div
        className={`chat__animated-border ${
          isClicked ? "chat__animated-border_open" : ""
        }`}
      ></div>
      <div
        className={`chat__menu ${isClicked ? "chat__menu_open" : ""}`}
        ref={menu}
      >
        <a
          className="chat__link"
          href="https://telegram.im/@CRECODRZ"
          target="_blank"
        >
          <img src={tg} alt="telegram" className="chat__messanger" />
        </a>
        <a
          className="chat__link"
          href="https://api.whatsapp.com/send?phone=79040161294"
          target="_blank"
        >
          <img src={wu} alt="whatsup" className="chat__messanger" />
        </a>
        <a
          className="chat__link"
          href="https://vk.com/c.records"
          target="_blank"
        >
          <img src={vk} alt="vk" className="chat__messanger" />
        </a>
        <a
          className="chat__link"
          href="https://www.instagram.com/c.recordz/"
          target="_blank"
        >
          <img src={insta} alt="instagram" className="chat__messanger" />
        </a>
      </div>
    </div>
  );
}
