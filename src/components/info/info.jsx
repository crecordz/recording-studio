import { forwardRef } from "react";
import "./info.css";
import video from "../../video/video.m4a";
function Info(props, ref) {
  return (
    <section className="info" ref={ref}>
      <h2 className="info__title">
        Cтудия звукозаписи <br /> в Твери{" "}
      </h2>
      <p className="info__subtitle">
        Запись вокала, сведение, аранжировка, мастеринг{" "}
      </p>
      <video className="info__video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default forwardRef(Info);
