import "./services.css";
function Services() {
  return (
    <section className="services">
      <h2 className="services__title">Наши услуги и цены</h2>
      <ul className="services__list">
        <li className="services__item">
          <p className="services__name">Запись</p>
          <p className="services__price services__price_right">
            1200р/час <br />
            <span className="services__price_high">(в выходные 2000р/час)</span>
          </p>
        </li>
        <li className="services__item">
          <p className="services__name">Сведение вокала с минусом</p>
          <p className="services__price">от 3000р</p>
        </li>
        <li className="services__item">
          <p className="services__name">Сведение мультитрека</p>
          <p className="services__price">от 5000р</p>
        </li>
        <li className="services__item">
          <p className="services__name">Мастеринг трека</p>
          <p className="services__price">1000р</p>
        </li>

        <li className="services__item">
          <p className="services__name">Продакшн/Аранжировка</p>
          <p className="services__price">от 10000р</p>
        </li>
      </ul>
    </section>
  );
}

export default Services;
