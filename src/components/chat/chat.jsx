import "./chat.css";
import chat from "../../images/chat.png";
export default function Chat() {
  return (
    <div className="chat">
      <p className="chat__title">СВЯЗАТЬСЯ С НАМИ</p>
      <img src={chat} alt="Связаться с нами" className="chat__icon" />
      <div className="chat__animated-border"></div>
    </div>
  );
}
