import { forwardRef } from "react";
import "./reviews.css";
import { useInView } from "react-intersection-observer";

function Reviews(props, ref) {
  const { ref: revRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="reviews" id="reviews" ref={ref}>
      <h2 className="reviews__title">Отзывы о работе нашей студии</h2>
      <div
        // style={{
        //   width: "560px",
        //   height: "800px",
        //   overflow: "hidden",
        //   position: "relative",
        // }}
        ref={revRef}
        className="reviews__map"
      >
        {inView && (
          <iframe
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid #e6e6e6",
              borderRadius: "3px",
              boxSizing: "border-box",
            }}
            src="https://yandex.ru/maps-reviews-widget/21226809657?comments"
          ></iframe>
        )}
      </div>
    </section>
  );
}

export default forwardRef(Reviews);
