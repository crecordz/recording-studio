import "./photo.css";
import one from "../../images/photo/1.jpg";
import two from "../../images/photo/2.JPG";
import three from "../../images/photo/3.JPG";
import four from "../../images/photo/4.JPG";
import five from "../../images/photo/5.JPG";
import six from "../../images/photo/6.jpg";
import seven from "../../images/photo/7.jpeg";
import eight from "../../images/photo/8.jpg";
import nine from "../../images/photo/9.jpg";
import ten from "../../images/photo/10.jpg";
import { forwardRef, useEffect, useRef, useState } from "react";
import ImagePopup from "../image-popup/image-popup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

function Photo(props, ref) {
  const [isOpen, setPopupOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState("");
  const [photosQuantity, setphotosQuantity] = useState(3);

  const { ref: photoRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleOpenPopup = (link) => {
    setPopupOpen(true);
    setCurrentPhoto(link);
  };

  const onClosePopup = () => {
    setPopupOpen(false);
    setCurrentPhoto("");
  };

  function SampleArrowPrew(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          transform: "scale(2)",
          left: "50px",
          zIndex: "1",
        }}
        onClick={onClick}
      />
    );
  }

  function SampleArrowNext(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          transform: "scale(2)",
          right: "50px",
          zIndex: "1",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: photosQuantity,
    slidesToScroll: 1,
    nextArrow: <SampleArrowNext />,
    prevArrow: <SampleArrowPrew />,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1080 && window.innerWidth > 652) {
        setphotosQuantity(2);
      } else if (window.innerWidth <= 652) {
        setphotosQuantity(1);
      } else {
        setphotosQuantity(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="photo" id="photo" ref={ref}>
      <h2 className="photo__title">Фотографии студии</h2>
      <div className="photo__gallery" ref={photoRef}>
        {inView && (
          <Slider {...settings}>
            <img
              src={four}
              alt="Фотографии студии"
              className="photo__image"
              onClick={() => handleOpenPopup(four)}
            ></img>

            <img
              src={seven}
              alt="Фотографии студии"
              className="photo__image"
              onClick={() => handleOpenPopup(seven)}
            ></img>
            <img
              src={one}
              alt="Фотографии студии"
              className="photo__image"
              onClick={() => handleOpenPopup(one)}
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
              src={eight}
              alt="Фотографии студии"
              className="photo__image"
              onClick={() => handleOpenPopup(four)}
            ></img>
            <img
              src={nine}
              alt="Фотографии студии"
              className="photo__image"
              onClick={() => handleOpenPopup(four)}
            ></img>
            <img
              src={ten}
              alt="Фотографии студии"
              className="photo__image"
              onClick={() => handleOpenPopup(four)}
            ></img>
          </Slider>
        )}
      </div>
      <ImagePopup isOpen={isOpen} link={currentPhoto} onClose={onClosePopup} />
    </section>
  );
}

export default forwardRef(Photo);
