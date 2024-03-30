import "./portfolio.css";

import CardProfile from "../AudioPlayer/audio-player";
import { useEffect, useRef } from "react";
import { fadeSection } from "../../utils/fadeSection";

export default function Portfolio() {
  const ref = useRef();
  useEffect(() => {
    fadeSection(ref.current);
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
