import { forwardRef } from "react";
import "./info.css";
import video from "../../video/video.MOV";
function Info(props, ref) {
  return (
    <section className="info" ref={ref}>
      <h2 className="info__title">C.RECORDS</h2>
      <p className="info__subtitle">студия звукозаписи</p>
      <video className="info__video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default forwardRef(Info);
