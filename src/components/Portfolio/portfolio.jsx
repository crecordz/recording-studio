import "./portfolio.css";

import CardProfile from "../AudioPlayer/audio-player";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Portfolio() {
  const ref = useRef();
  useEffect(() => {
    const pin = gsap
      .timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "20vh center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      })
      .fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section className="portfolio" ref={ref}>
      <h2 className="portfolio_title">Некоторые примеры наших работ</h2>
      <div className="audioitems">
        <CardProfile />
      </div>
    </section>
  );
}
