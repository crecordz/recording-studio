import "./contacts.css";

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <div className="contacts__map-container">
        <iframe
          title="map"
          src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=35.899922%2C56.835885&mode=search&oid=21226809657&ol=biz&z=17"
          width="560"
          height="400"
          frameBorder="1"
          allowFullScreen={true}
          className="contacts__map"
        ></iframe>
      </div>
      <p className="contacts__subtitle">
        Готовы прийти на запись? Звоните или пишите в любом из мессенджеров
      </p>
      <ul className="contacts__list">
        <li className="contacts__item">ВКонтакте</li>
        <li className="contacts__item">Телеграм</li>
        <li className="contacts__item">WhatsApp</li>
      </ul>
    </section>
  );
}

export default Contacts;
