import "./chat.css";
import chat from "../../images/chat.png";
import tg from "../../images/telegram.svg";
import wu from "../../images/whatsapp.svg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Chat() {
  const [isClicked, setIsClicked] = useState(false);
  const menu = useRef();

  const openMenu = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    if (isClicked) {
      gsap.fromTo(menu, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, [isClicked]);
  return (
    <div className={`chat`} onClick={openMenu}>
      <p className={`chat__title ${isClicked ? "chat_open" : ""}`}>
        СВЯЗАТЬСЯ С НАМИ
      </p>
      <img src={chat} alt="Связаться с нами" className="chat__icon" />
      <div className="chat__animated-border"></div>
      <div
        className={`chat__menu ${isClicked ? "chat__menu_open" : ""}`}
        ref={menu}
      >
        <img src={tg} alt="telegram" className="chat__messanger" />
        <img src={wu} alt="whatsup" className="chat__messanger" />
      </div>
    </div>
  );
}
