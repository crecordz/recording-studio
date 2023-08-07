import { useEffect, useState } from "react";
import "./Equipment-photo.css";
import arrow from "../../images/arrow.png";

function EquipmentPhoto({ src, alt, goPrevious, goNext }) {
  return (
    <>
      <div className="container">
        <img className="photo" src={src} alt={alt} />

        <button className="button button-previous" onClick={goPrevious}>
          <img src={arrow} alt="arrow" className="arrow arrow_fliped" />
        </button>
        <button className="button button-next" onClick={goNext}>
          <img src={arrow} alt="arrow" className="arrow" />
        </button>
      </div>
    </>
  );
}

export default EquipmentPhoto;
