import "./equipment.css";
import EquipmentItem from "../Equipment-item/Equipment-item";
import { forwardRef, useEffect, useRef } from "react";
import { fadeSection } from "../../utils/fadeSection";

function Equipment(props, ref) {
  return (
    <section className="equipment" ref={ref} id="equipment">
      <h2 className="equipment__title">Оборудование</h2>
      <div className="equipment__container">
        <ul className="equipment__list">
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

export default forwardRef(Equipment);
