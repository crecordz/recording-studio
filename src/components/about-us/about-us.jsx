import { forwardRef, useRef, useEffect } from "react";
import "./about-us.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";
import preview from "../../images/preview.jpg";
gsap.registerPlugin(ScrollTrigger);

function AboutUs(props, ref) {
  const videoRef = useRef();

  return (
    <section className="about-us" ref={ref}>
      <h2 className="about-us__title">О нашей студии</h2>
      <div className="about-us__video" ref={videoRef}>
        <ReactPlayer
          light={
            <img src={preview} alt="preview" className="about-us__preview" />
          }
          url="https://www.youtube.com/embed/QDYFnWOM8zg?si=-rVXxqbeymo12u7j"
          width="853px"
          height="480px"
        />
      </div>
    </section>
  );
}

export default forwardRef(AboutUs);
