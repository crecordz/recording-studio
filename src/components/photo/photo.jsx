import "./photo.css";
import one from "../../images/photo/1.jpg";
import two from "../../images/photo/2.JPG";
import three from "../../images/photo/3.JPG";
import four from "../../images/photo/4.JPG";
import five from "../../images/photo/5.JPG";
import six from "../../images/photo/6.jpg";
import seven from "../../images/photo/7.jpeg";
import { useEffect, useRef, useState } from "react";
import ImagePopup from "../image-popup/image-popup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Photo() {
  const [isOpen, setPopupOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState("");

  const handleOpenPopup = (link) => {
    // setPopupOpen(true);
    // setCurrentPhoto(link);
  };

  const onClosePopup = () => {
    setPopupOpen(false);
    setCurrentPhoto("");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="photo" id="photo">
      <h2 className="photo__title">Фотографии студии</h2>
      <div className="photo__gallery">
        <Slider {...settings}>
          <img
            src={one}
            alt="Фотографии студии"
            className="photo__image"
            onClick={() => handleOpenPopup(one)}
          ></img>
          <img
            src={seven}
            alt="Фотографии студии"
            className="photo__image"
            onClick={() => handleOpenPopup(seven)}
          ></img>
          <img
            src={two}
            alt="Фотографии студии"
            className="photo__image"
            onClick={() => handleOpenPopup(two)}
          ></img>
          <img
            src={six}
            alt="Фотографии студии"
            className="photo__image"
            onClick={() => handleOpenPopup(six)}
          ></img>
          <img
            src={three}
            alt="Фотографии студии"
            className="photo__image"
            onClick={() => handleOpenPopup(three)}
          ></img>
          <img
            src={five}
            alt="Фотографии студии"
            className="photo__image"
            onClick={() => handleOpenPopup(five)}
          ></img>
          <img
            src={four}
            alt="Фотографии студии"
            className="photo__image"
            onClick={() => handleOpenPopup(four)}
          ></img>
        </Slider>
      </div>
      <ImagePopup isOpen={isOpen} link={currentPhoto} onClose={onClosePopup} />
    </section>
  );
}
