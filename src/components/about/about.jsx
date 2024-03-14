import "./about.css";
import EquipmentItem from "../Equipment-item/Equipment-item";
import EquipmentPhoto from "../Equipment-photo/Equipment-photo";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          markers: true,
          scrub: false,
          toggleActions: "play reverse play reverse",
        },
      })
      .fromTo(el, { opacity: 0 }, { opacity: 1, duration: 3 });
  }, []);
  return (
    <section className="about" ref={imgRef}>
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
