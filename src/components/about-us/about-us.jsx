import { forwardRef, useRef, useEffect } from "react";
import "./about-us.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";
import preview from "../../images/preview.jpg";
gsap.registerPlugin(ScrollTrigger);

function AboutUs(props, ref) {
  const titleRef = useRef();
  const videoRef = useRef();
  useEffect(() => {
    const pin = gsap
      .timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center",
          end: "bottom center",
        },
      })

      .fromTo(
        titleRef.current,
        { x: "60vw", skewX: "-60deg" },
        { x: "0", skewX: "0", duration: 1 }
      );

    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section className="about-us" ref={ref}>
      <h2 className="about-us__title" ref={titleRef}>
        О нашей студии
      </h2>
      <div className="about-us__video" ref={videoRef}>
        {/* <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/QDYFnWOM8zg?si=-rVXxqbeymo12u7j"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe> */}
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
