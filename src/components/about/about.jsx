import "./about.css";
import EquipmentItem from "../Equipment-item/Equipment-item";
import EquipmentPhoto from "../Equipment-photo/Equipment-photo";
import { useEffect, useState } from "react";

import neumann from "../../images/equipment/neumann.jpg";
import elasion from "../../images/equipment/elasion.jpg";
import oktava3 from "../../images/equipment/oktava3.jpg";
import oktava5 from "../../images/equipment/oktava5.jpg";
import quested from "../../images/equipment/quested.jpg";
import dynaudio from "../../images/equipment/dynaudio.jpg";
import digilabDAC from "../../images/equipment/DigilabDAC.jpg";
import chandler from "../../images/equipment/chandler.jpg";
import presonus from "../../images/equipment/presonus.jpg";
import digilabM from "../../images/equipment/digilabM.jpg";

const currentPhotos = [
  {
    name: "neumann",
    src: neumann,
  },
  {
    name: "elasion",
    src: elasion,
  },
  {
    name: "oktava3",
    src: oktava3,
  },
  {
    name: "oktava5",
    src: oktava5,
  },
  {
    name: "quested",
    src: quested,
  },
  {
    name: "dynaudio",
    src: dynaudio,
  },
  {
    name: "digilabDAC",
    src: digilabDAC,
  },
  {
    name: "chandler",
    src: chandler,
  },
  {
    name: "presonus",
    src: presonus,
  },
  {
    name: "digilabM",
    src: digilabM,
  },
];

function About() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [listOfPhotos, setListOfPhotos] = useState([]);

  useEffect(() => {
    setListOfPhotos(currentPhotos);
  }, []);

  const goPrevious = () => {
    if (currentPhoto === 0) {
      setCurrentPhoto(listOfPhotos.length - 1);
    } else {
      setCurrentPhoto(currentPhoto - 1);
    }
  };

  const goNext = () => {
    if (currentPhoto === listOfPhotos.length - 1) {
      setCurrentPhoto(0);
    } else {
      setCurrentPhoto(currentPhoto + 1);
    }
  };

  if (listOfPhotos.length === 0) {
    return null;
  }
  return (
    <section className="about">
      <h2 className="about__title">Оборудование</h2>
      <div className="about__container">
        <ul className="about__list">
          <EquipmentItem title={"Микрофон Neumann 87U"} />
          <EquipmentItem title={"Микрофон Elation km901 p48"} />
          <EquipmentItem title={"Микрофон Октава 319"} />
          <EquipmentItem title={"Микрофон Октава 519"} />
          <EquipmentItem title={"Мониторы Quested S8"} />
          <EquipmentItem title={"Мониторы dynaudio bm6a mkii"} />
          <EquipmentItem title={"Оцифровщики Digilab DAC +ADC"} />
          <EquipmentItem title={"Станция мониторинга Presonus"} />
          <EquipmentItem title={"Оцифровщики Digilab DAC +ADC"} />
          <EquipmentItem title={"Предусилитель Digilab marvel Quad"} />
          <EquipmentItem
            title={"Предусилитель EMI Chandler limited. Passive TG Channel"}
          />
        </ul>

        <EquipmentPhoto
          src={listOfPhotos[currentPhoto].src}
          alt={listOfPhotos[currentPhoto].name}
          goNext={goNext}
          goPrevious={goPrevious}
        />
      </div>
    </section>
  );
}

export default About;
