import "./about.css";
import EquipmentItem from "../Equipment-item/Equipment-item";
import { useEffect, useRef } from "react";
import { fadeSection } from "../../utils/fadeSection";

function About() {
  const aboutRef = useRef(null);
  // useEffect(() => {
  //   fadeSection(aboutRef.current);
  // }, []);
  return (
    <section className="about" ref={aboutRef}>
      <h2 className="about__title">Оборудование</h2>
      <div className="about__container">
        <ul className="about__list">
          <EquipmentItem title={"Микрофон Neumann 87U"} />
          <EquipmentItem title={"Микрофон Elation km901 p48"} />
          <EquipmentItem title={"Микрофон Октава 319"} />
          <EquipmentItem title={"Микрофон Октава 519"} />
          <EquipmentItem
            title={"Аудиоинтерфейс Universal audio Apollo 16 mk II"}
          />
          <EquipmentItem title={"Мониторы Quested S8"} />
          <EquipmentItem title={"Мониторы dynaudio bm6a mkii"} />
          <EquipmentItem title={"Мониторы Urei 813c"} />
          <EquipmentItem title={"Станция мониторинга Presonus"} />
          <EquipmentItem title={"Оцифровщики Digilab DAC +ADC"} />
          <EquipmentItem title={"Предусилитель Digilab marvel Quad"} />
          <EquipmentItem
            title={"Предусилитель EMI Chandler limited. Passive TG Channel"}
          />
        </ul>
      </div>
    </section>
  );
}

export default About;
