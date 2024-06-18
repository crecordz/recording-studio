import "./equipment.css";
import EquipmentItem from "../Equipment-item/Equipment-item";
import { forwardRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Microphone from "../Microphone/Microphone";
import { useInView } from "react-intersection-observer";
import Loader from "../loader/loader";

import {
  Environment,
  Backdrop,
  ContactShadows,
  PresentationControls,
} from "@react-three/drei";

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
      <div className="equipment__wrapper">
        <div className="neumann" ref={eqRef}>
          {inView && (
            <>
              <Loader size={150} loading={isLoading} />

              <Canvas
                shadows
                camera={{ position: [0.7, 0, 5] }}
                onCreated={handleLoaded}
              >
                <directionalLight
                  position={[-10, 0, -5]}
                  intensity={1}
                  color="white"
                />
                <directionalLight
                  position={[-1, -2, -5]}
                  intensity={6.2}
                  color="white"
                />
                <spotLight
                  position={[3, 0, 7]}
                  intensity={0.5}
                  penumbra={1}
                  angle={0.6}
                  castShadow
                  color="#46a32a"
                />

                <PresentationControls
                  global
                  config={{ mass: 6, tension: 800 }}
                  snap={{ mass: 6, tension: 800 }}
                  rotation={[0, 0.1, 0]}
                  polar={[0, 0]}
                  azimuth={[-Math.PI / 60, Math.PI / 60]}
                >
                  <Microphone castShadow />
                </PresentationControls>
                {/* <Backdrop
                  castShadow
                  floor={2}
                  position={[0, -1, -3]}
                  scale={[50, 10, 4]}
                >
                  <meshStandardMaterial color="black" envMapIntensity={0.1} />
                </Backdrop>
                <ContactShadows
                  position={[0, -0.485, 0]}
                  scale={5}
                  blur={1.5}
                  far={1}
                /> */}
                <Environment preset="forest" />
              </Canvas>
            </>
          )}
        </div>
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
      </div>
    </section>
  );
}

export default forwardRef(Equipment);
