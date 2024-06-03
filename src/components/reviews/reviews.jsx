import { forwardRef } from "react";
import "./reviews.css";

function Reviews(props, ref) {
  return (
    <section className="reviews" id="reviews" ref={ref}>
      <h2 className="reviews__title">Отзывы о работе нашей студии</h2>
      <div
        style={{
          width: "560px",
          height: "800px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <iframe
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid #e6e6e6",
            borderRadius: "5px",
            boxSizing: "border-box",
          }}
          src="https://yandex.ru/maps-reviews-widget/21226809657?comments"
        ></iframe>
      </div>
    </section>
  );
}

export default forwardRef(Reviews);
