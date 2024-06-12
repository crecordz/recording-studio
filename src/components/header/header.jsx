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

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleMenuItemClick = (clickHandler) => {
    clickHandler();
    setIsClicked(false); // Close the menu
  };

  return (
    <>
      <header className={`header ${isHeaderColored ? "header_colored" : ""}`}>
        <div
          className="header__logo"
          onClick={() => handleMenuItemClick(handleMainClick)}
        ></div>
        <nav
          className={`header__wrapper ${
            isClicked ? "header__wrapper_open" : "header__wrapper_close"
          }`}
        >
          <ul
            className={`header__list ${isClicked ? "header__list_open" : ""}`}
          >
            <li className="header__item">
              <a
                className="header__link"
                onClick={() => handleMenuItemClick(handleAboutUsClick)}
              >
                О нас
              </a>
            </li>
            <li className="header__item">
              <a
                className="header__link"
                onClick={() => handleMenuItemClick(handleServicesClick)}
              >
                Услуги
              </a>
            </li>
            <li
              className="header__item"
              onClick={() => handleMenuItemClick(handleEquipmentClick)}
            >
              <a className="header__link">Оборудование</a>
            </li>
            <li
              className="header__item"
              onClick={() => handleMenuItemClick(handlePortfolioClick)}
            >
              <a className="header__link">Наши работы</a>
            </li>
            <li
              className="header__item"
              onClick={() => handleMenuItemClick(handlePhotoClick)}
            >
              <a className="header__link">Фотографии</a>
            </li>
            <li
              className="header__item"
              onClick={() => handleMenuItemClick(handleReviewsClick)}
            >
              <a className="header__link">Отзывы</a>
            </li>
            <li
              className="header__item"
              onClick={() => handleMenuItemClick(handleContactsClick)}
            >
              <a className="header__link">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className="header__wrapper-menu">
          <div className="header__contacts">
            <a className="header__phone" href="tel:+79040161294">
              +79040161294
            </a>
            <p className="header__adress">Тверь, ул. Александра Завидова 14</p>
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
