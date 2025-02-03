import { forwardRef, useEffect, useState } from "react";
import "./about-us.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
gsap.registerPlugin(ScrollTrigger);

function AboutUs(props, ref) {
  const { ref: videoRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [size, setSize] = useState({ width: "853px", height: "480px" });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 918) {
        setSize({ width: "853px", height: "480px" });
      } else if (window.innerWidth <= 917 && window.innerWidth > 700) {
        setSize({ width: "640px", height: "360px" });
      } else if (window.innerWidth <= 700 && window.innerWidth > 550) {
        setSize({ width: "512px", height: "288px" });
      } else if (window.innerWidth <= 550 && window.innerWidth > 458) {
        setSize({ width: "420px", height: "236px" });
      } else if (window.innerWidth <= 458 && window.innerWidth > 413) {
        setSize({ width: "380px", height: "214px" });
      } else if (window.innerWidth <= 413 && window.innerWidth > 350) {
        setSize({ width: "320px", height: "180px" });
      } else if (window.innerWidth <= 350) {
        setSize({ width: "280px", height: "158px" });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="about-us" ref={ref}>
      <h2 className="about-us__title">О нашей студии</h2>

      <div className="about-us__video" ref={videoRef}>
        {inView && (
          <iframe
            src="https://vkvideo.ru/video_ext.php?oid=-25681218&id=456239020&hd=2&hash=32ae7e0e58fb9d14&js_api=1"
            width={size.width}
            height={size.height}
            allow=" encrypted-media; fullscreen; picture-in-picture;"
            frameBorder="0"
            allowfullscreen
            loading="lazy"
          ></iframe>
        )}
      </div>
    </section>
  );
}

export default forwardRef(AboutUs);
