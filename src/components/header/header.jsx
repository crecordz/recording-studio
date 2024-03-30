import "./header.css";
import tg from "../../images/telegram.svg";
import wa from "../../images/whatsapp.svg";
function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo"></div>
        {/* <div className="header__messangers">
          <a
            className="header__refs one"
            href="https://telegram.im/@CRECODRZ"
            target="_blank"
          >
            <img src={tg} alt="telegram" className="header__contact-icon" />
          </a>
          <a
            className="header__refs two"
            href="https://api.whatsapp.com/send?phone=79040161294"
            target="_blank"
          >
            <img src={wa} alt="telegram" className="header__contact-icon" />
          </a>
          <p className="header__greet three">
            Пишите нам в мессенджер, мы на связи!
          </p>
        </div> */}

        <nav>
          <ul className="header__list">
            <li className="header__item">
              <a href="#services" className="header__link">
                Цены
              </a>
            </li>
            <li className="header__item">
              <a href="#about" className="header__link">
                Оборудование
              </a>
            </li>

            <li className="header__item">
              <a href="#photo" className="header__link">
                Фотографии
              </a>
            </li>
            <li className="header__item">
              <a href="#reviews" className="header__link">
                Отзывы
              </a>
            </li>
            <li className="header__item">
              <a href="#contacts" className="header__link">
                Контакты
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__contacts">
          <h1 className="header__phone">+79040161294</h1>
          <p className="header__adress">г.Тверь, ул. Александра Завидова 14 </p>
        </div>
      </header>
    </>
  );
}

export default Header;
