import { Canvas } from "@react-three/fiber";

import "./info.css";
import ThreeElement from "../ThreeElement/ThreeElement";
function Info() {
  return (
    <section className="info">
      <h2 className="info__title">C.RECORDZ</h2>
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
