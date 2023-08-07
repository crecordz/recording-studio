import "./contacts.css";
function Contacts() {
  return (
    <section className="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <p className="contacts__subtitle">
        Готовы прийти на запись? Звоните или пишите в любом из мессенджеров
      </p>
      <ul className="contacts__list">
        <li className="contacts__item">ВКонтакте</li>
        <li className="contacts__item">Телеграм</li>
        <li className="contacts__item">WhatsApp </li>
      </ul>
    </section>
  );
}

export default Contacts;
