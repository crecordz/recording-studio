import "./equipment.css";
import EquipmentItem from "../Equipment-item/Equipment-item";
import { forwardRef, useEffect, useRef } from "react";

import { Canvas } from "@react-three/fiber";
import { Cloud, Html } from "@react-three/drei";
import Microphone from "../Microphone/Microphone";

function Equipment(props, ref) {
  return (
    <section className="equipment" ref={ref} id="equipment">
      <div className="equipment__wrapper">
        <div className="neumann">
          <Canvas>
            <Html position={[-2, 3.5, 0]}>
              <h2 className="equipment__title">Оборудование</h2>
            </Html>
            <directionalLight
              castShadow
              position={[-1, 1, 3]}
              intensity={7.5}
            />
            <ambientLight intensity={1.5} />

            <Microphone />
            <Html position={[-1, 2, 0]}>
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
                    title={
                      "Предусилитель EMI Chandler limited. Passive TG Channel"
                    }
                  />
                </ul>
              </div>
            </Html>

            <Cloud
              scale={0.3}
              volume={10}
              color="#46a32a"
              fade={10}
              opacity={0.5}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Equipment);
