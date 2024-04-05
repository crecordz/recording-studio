import "./reviews.css";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
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
            opacity: 0.8,
          }}
          src="https://yandex.ru/maps-reviews-widget/21226809657?comments"
        ></iframe>
      </div>
    </section>
  );
}
