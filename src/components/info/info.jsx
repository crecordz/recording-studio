import { Canvas } from "@react-three/fiber";

import "./info.css";
import ThreeElement from "../ThreeElement/ThreeElement";
import { useEffect, useRef } from "react";
import { fadeSection } from "../../utils/fadeSection";
function Info() {
  const info = useRef();
  useEffect(() => {
    fadeSection(info.current);
  });
  return (
    <section className="info" ref={info}>
      <h2 className="info__title">C.RECORDS</h2>
      <p className="info__subtitle">студия звукозаписи</p>
      {/* <div className="canvas-element">
        <Canvas>
          <ThreeElement />
        </Canvas>
      </div> */}
    </section>
  );
}

export default Info;
