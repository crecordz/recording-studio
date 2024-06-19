import "./header.css";
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
    setIsClicked(false);
  };

  return (
    <>
      <header className={`header ${isHeaderColored ? "header_colored" : ""}`}>
        <div className="header__container">
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
              <li
                className="header__item"
                onClick={() => handleMenuItemClick(handleAboutUsClick)}
              >
                О нас
              </li>
              <li
                className="header__item"
                onClick={() => handleMenuItemClick(handleServicesClick)}
              >
                Услуги
              </li>
              <li
                className="header__item"
                onClick={() => handleMenuItemClick(handleEquipmentClick)}
              >
                Оборудование
              </li>
              <li
                className="header__item"
                onClick={() => handleMenuItemClick(handlePortfolioClick)}
              >
                Наши работы
              </li>
              <li
                className="header__item"
                onClick={() => handleMenuItemClick(handlePhotoClick)}
              >
                Фотографии
              </li>
              <li
                className="header__item"
                onClick={() => handleMenuItemClick(handleReviewsClick)}
              >
                Отзывы
              </li>
              <li
                className="header__item"
                onClick={() => handleMenuItemClick(handleContactsClick)}
              >
                Контакты
              </li>
            </ul>
          </nav>
          <div className="header__wrapper-menu">
            <div className="header__contacts">
              <a className="header__phone" href="tel:+79040161294">
                +79040161294
              </a>
              <p className="header__adress">
                Тверь, ул. Александра Завидова 14
              </p>
            </div>
            <div
              className={`header__menu ${isClicked ? "header__menu_open" : ""}`}
              onClick={handleClick}
            ></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
