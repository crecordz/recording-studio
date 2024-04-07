import "./header.css";
import tg from "../../images/telegram.svg";
import wa from "../../images/whatsapp.svg";
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
  return (
    <>
      <header className={`header ${isHeaderColored ? "header_colored" : ""}`}>
        <div className="header__logo" onClick={handleMainClick}></div>
        <nav>
          <ul className="header__list">
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

        <div className="header__contacts">
          <h1 className="header__phone">+79040161294</h1>
          <p className="header__adress">Тверь, ул. Александра Завидова 14 </p>
        </div>
      </header>
    </>
  );
}

export default Header;
