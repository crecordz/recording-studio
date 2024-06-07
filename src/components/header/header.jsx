import "./header.css";
import menu from "../../images/menu.svg";
import close from "../../images/close.png";
import { useState } from "react";
function Header({
  isHeaderColored,
  handleAboutUsClick,
  handleServicesClick,
  handleEquipmentClick,
  handlePortfolioClick,
  handlePhotoClick,
  handleReviewsClick,
  handleContactsClick,
  handleMainClick,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <header className={`header ${isHeaderColored ? "header_colored" : ""}`}>
        <div className="header__logo" onClick={handleMainClick}></div>
        <nav className={`${isClicked ? "header__wrapper" : ""}`}>
          <ul
            className={`${isClicked ? "header__list_open" : "header__list "}`}
          >
            <li className="header__item">
              <a className="header__link" onClick={handleAboutUsClick}>
                О нас
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" onClick={handleServicesClick}>
                Услуги
              </a>
            </li>
            <li className="header__item" onClick={handleEquipmentClick}>
              <a className="header__link">Оборудование</a>
            </li>
            <li className="header__item" onClick={handlePortfolioClick}>
              <a className="header__link">Наши работы</a>
            </li>
            <li className="header__item" onClick={handlePhotoClick}>
              <a className="header__link">Фотографии</a>
            </li>
            <li className="header__item" onClick={handleReviewsClick}>
              <a className="header__link">Отзывы</a>
            </li>
            <li className="header__item" onClick={handleContactsClick}>
              <a className="header__link">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className="header__wrapper-menu">
          <div className="header__contacts">
            <h1 className="header__phone">+79040161294</h1>
            <p className="header__adress">Тверь, ул. Александра Завидова 14 </p>
          </div>
          <div
            className={`header__menu ${isClicked ? "header__menu_open" : ""}`}
            onClick={handleClick}
          ></div>
        </div>
      </header>
    </>
  );
}

export default Header;
