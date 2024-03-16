import "./photo.css";
import one from "../../images/photo/1.jpg";
import two from "../../images/photo/2.JPG";
import three from "../../images/photo/3.JPG";
import four from "../../images/photo/4.JPG";
import five from "../../images/photo/5.JPG";
import six from "../../images/photo/6.jpg";
import seven from "../../images/photo/7.jpeg";
import useSmoothHorizontalScroll from "use-smooth-horizontal-scroll";
import { useState } from "react";

export default function Photo() {
  const { scrollContainerRef, handleScroll, scrollTo, isAtStart, isAtEnd } =
    useSmoothHorizontalScroll();
  const [openPopup, setPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };
  return (
    <section className="photo">
      <h2 className="photo__title">
        Фотографии студии <br />{" "}
        <span className="photo__listai">листай --{">"}</span>
      </h2>
      <div
        className="photo__gallery"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        {/* <button
          className="photo__button"
          onClick={() => scrollTo(-1000)}
          disabled={isAtStart}
        ></button> */}
        <img
          src={one}
          alt="Фотографии студии"
          className="photo__image"
          onClick={handleOpenPopup}
        ></img>
        <img
          src={seven}
          alt="Фотографии студии"
          className="photo__image"
          onClick={handleOpenPopup}
        ></img>
        <img
          src={two}
          alt="Фотографии студии"
          className="photo__image"
          onClick={handleOpenPopup}
        ></img>
        <img
          src={six}
          alt="Фотографии студии"
          className="photo__image"
          onClick={handleOpenPopup}
        ></img>
        <img
          src={three}
          alt="Фотографии студии"
          className="photo__image"
          onClick={handleOpenPopup}
        ></img>
        <img
          src={four}
          alt="Фотографии студии"
          className="photo__image"
          onClick={handleOpenPopup}
        ></img>
        <img
          src={five}
          alt="Фотографии студии"
          className="photo__image"
          onClick={handleOpenPopup}
        ></img>
        {/* <button
          className="photo__button photo__button_end"
          onClick={() => scrollTo(1000)}
          disabled={isAtEnd}
        ></button> */}
      </div>
      <div className={`popup ${openPopup ? "popup_open" : ""}`}></div>
    </section>
  );
}
