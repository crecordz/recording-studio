import "./header.css";
function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>

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
            <a href="#contact" className="header__link">
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
  );
}

export default Header;
