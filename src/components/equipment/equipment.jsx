import "./equipment.css";
import EquipmentItem from "../Equipment-item/Equipment-item";
import { forwardRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Microphone from "../Microphone/Microphone";
import { useInView } from "react-intersection-observer";
import Loader from "../loader/loader";

import { Environment, PresentationControls } from "@react-three/drei";

function Equipment(props, ref) {
  const { ref: eqRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
    }
  }, [inView]);

  const handleLoaded = () => {
    setIsLoading(false);
  };

  return (
    <section className="equipment" ref={ref} id="equipment">
      <h2 className="equipment__title">Оборудование</h2>

      <ul className="equipment__list">
        <EquipmentItem title={"Микрофон Neumann 87U"} />
        <EquipmentItem title={"Микрофон Elation km901 p48"} />
        <EquipmentItem title={"Микрофоны Октава 319 и 519"} />
        <EquipmentItem title={"Наушники Beyerdynamic DT 770 Pro 250 ohm"} />
        <EquipmentItem title={"Наушники Beyerdynamic DT 990 Pro 250 ohm"} />
        <EquipmentItem title={"Наушники Sennheiser hd 650"} />
        <EquipmentItem title={"Пара микрофонов AKG Perception"} />
        <EquipmentItem title={"Мониторы Quested S8"} />
        <EquipmentItem title={"Мониторы M-Audio Bx8"} />
        <EquipmentItem title={"Мониторы Urei 813c"} />
        <EquipmentItem title={"Станция мониторинга Presonus"} />
        <EquipmentItem title={"Оцифровщики Digilab DAC + ADC"} />
        <EquipmentItem title={"Предусилитель Digilab marvel Quad"} />
        <EquipmentItem
          title={"Предусилитель EMI Chandler limited. Passive TG Channel"}
        />
      </ul>
    </section>
  );
}

export default forwardRef(Equipment);
