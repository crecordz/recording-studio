import "./header.css";
import tg from "../../images/telegram.svg";
import wa from "../../images/whatsapp.svg";
function Header({ handleServicesClick }) {
  return (
    <>
      <header className="header">
        <div className="header__logo"></div>
        <nav>
          <ul className="header__list">
            <li className="header__item" onClick={handleServicesClick}>
              <a className="header__link">Цены</a>
            </li>
            <li className="header__item" onClick={handleServicesClick}>
              <a href="#about" className="header__link">
                Оборудование
              </a>
            </li>

            <li className="header__item" onClick={handleServicesClick}>
              <a href="#photo" className="header__link">
                Фотографии
              </a>
            </li>
            <li className="header__item" onClick={handleServicesClick}>
              <a href="#reviews" className="header__link">
                Отзывы
              </a>
            </li>
            <li className="header__item" onClick={handleServicesClick}>
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
