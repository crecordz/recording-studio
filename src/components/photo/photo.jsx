import "./photo.css";
import one from "../../images/photo/1.jpg";
import two from "../../images/photo/2.JPG";
import three from "../../images/photo/3.JPG";
import four from "../../images/photo/4.JPG";
import five from "../../images/photo/5.JPG";
import six from "../../images/photo/6.jpg";
import seven from "../../images/photo/7.jpeg";
import { useEffect, useRef } from "react";

export default function Photo() {
  const gallery = useRef();

  const doScroll = (e) => {
    e.preventDefault();
    gallery.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    gallery.current.addEventListener("wheel", doScroll);
  });
  return (
    <section className="photo">
      <h2 className="photo__title">Фотографии студии</h2>
      <div className="photo__gallery" ref={gallery}>
        <img src={one} alt="Фотографии студии" className="photo__image"></img>
        <img src={seven} alt="Фотографии студии" className="photo__image"></img>
        <img src={two} alt="Фотографии студии" className="photo__image"></img>
        <img src={six} alt="Фотографии студии" className="photo__image"></img>
        <img src={three} alt="Фотографии студии" className="photo__image"></img>
        <img src={four} alt="Фотографии студии" className="photo__image"></img>
        <img src={five} alt="Фотографии студии" className="photo__image"></img>
      </div>
    </section>
  );
}