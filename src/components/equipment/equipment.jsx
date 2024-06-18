import "./equipment.css";
import EquipmentItem from "../Equipment-item/Equipment-item";
import { Suspense } from "react";
import { forwardRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Microphone from "../Microphone/Microphone";
import { useInView } from "react-intersection-observer";
import Loader from "../loader/loader";
import { BakeShadows, ContactShadows, Environment } from "@react-three/drei";

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

              <Canvas onCreated={handleLoaded} gl={{ antialias: true }}>
                <directionalLight
                  castShadow
                  position={[-1, 1, 3]}
                  intensity={4.5}
                  shadow-mapSize-width={2048}
                  shadow-mapSize-height={2048}
                />
                <pointLight
                  position={[20, -10, 2]}
                  color="#46a32a"
                  intensity={0.1}
                  decay={50}
                />

                <Environment preset="night" />
                <Suspense fallback={null}>
                  <Microphone castShadow />
                  <ContactShadows
                    frames={1}
                    rotation-x={[Math.PI / 2]}
                    position={[0, -0.4, 0]}
                    far={1}
                    width={1.5}
                    height={1.5}
                    blur={0.2}
                  />

                  <BakeShadows />
                </Suspense>
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
