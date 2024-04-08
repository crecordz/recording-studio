import { forwardRef, useRef, useEffect } from "react";
import "./info.css";
import video from "../../video/video.m4a";

import gsap from "gsap";

function Info(props, ref) {
  const titleRef = useRef();
  const subTitleRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { letterSpacing: "40px", opacity: 0.2 },
      { letterSpacing: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      subTitleRef.current,
      { y: "33vh", opacity: 0.2 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section className="info" ref={ref}>
      <h2 className="info__title" ref={titleRef}>
        Cтудия звукозаписи <br /> в Твери{" "}
      </h2>
      <p className="info__subtitle" ref={subTitleRef}>
        Запись вокала, сведение, мастеринг, аранжировка{" "}
      </p>
      <video className="info__video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default forwardRef(Info);
