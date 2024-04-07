import { forwardRef } from "react";
import "./about-us.css";

function AboutUs(props, ref) {
  return (
    <section className="about-us" ref={ref}>
      <h2 className="about-us__title">О нашей студии</h2>
      <div className="about-us__video">
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/QDYFnWOM8zg?si=-rVXxqbeymo12u7j"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default forwardRef(AboutUs);
