import "./portfolio.css";

import CardProfile from "../AudioPlayer/audio-player";
import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateElement } from "../../utils/utils";
import { useInView } from "react-intersection-observer";
gsap.registerPlugin(ScrollTrigger);

function Portfolio(props, ref) {
  const audio = useRef();
  const paragraph1 = useRef();
  const paragraph2 = useRef();
  const paragraph3 = useRef();
  const paragraph4 = useRef();
  const paragraph5 = useRef();

  const { ref: portRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const pin2 = animateElement(
      ref,
      paragraph1,
      "top center-=20%",
      "bottom center",
      "5vw",
      "0",
      0.2,
      "none,",
      0.5
    );
    const pin3 = animateElement(
      ref,
      paragraph2,
      "top center-=20%",
      "bottom center",
      "5vw",
      "0",
      0.4,
      "none,",
      0.5
    );
    const pin4 = animateElement(
      ref,
      paragraph3,
      "top center-=20%",
      "bottom center",
      "5vw",
      "0",
      0.6,
      "none,",
      0.5
    );
    const pin5 = animateElement(
      ref,
      paragraph4,
      "top center-=20%",
      "bottom center",
      "5vw",
      "0",
      0.8,
      "none,",
      0.5
    );
    const pin6 = animateElement(
      ref,
      paragraph5,
      "top center-=20%",
      "bottom center",
      "5vw",
      "0",
      1,
      "none,",
      0.5
    );
    return () => {
      pin2.kill();
      pin3.kill();
      pin4.kill();
      pin5.kill();
      pin6.kill();
    };
  }, []);
  return (
    <section className="portfolio" ref={ref}>
      <h2 className="portfolio_title">Некоторые примеры наших работ</h2>
      <div className="portfolio__wrapper" ref={portRef}>
        {inView && (
          <div className="portfolio__audio" ref={audio}>
            <CardProfile />
          </div>
        )}

        <div className="portfolio__paragraph">
          <p className="portfolio__item" ref={paragraph1}>
            Мы работаем с широким спектром музыкальных жанров
          </p>
          <p className="portfolio__item" ref={paragraph2}>
            Создаём аудиорекламу, аудиогиды, подкасты и тд. Например нами был
            создан{" "}
            <a
              href="https://russia.ru/participants/tverskaia-oblast"
              className="portfolio__link"
              target="_blank"
            >
              аудиогид
            </a>{" "}
            для выставки "Россия" на ВДНХ
          </p>
          <p className="portfolio__item" ref={paragraph3}>
            Прописываем фонограммы для музыкальных спектаклей ДДиМ, ТЮЗа, Драм.
            театра и др{" "}
          </p>
          <p className="portfolio__item" ref={paragraph4}>
            Записываем подарочные песни на свадьбу, выпускные, дни рождения и тд{" "}
          </p>
          <p className="portfolio__item" ref={paragraph5}>
            Записываем большие коллективы, например ансамбль ТвСВУ "Молодая
            гвардия"
          </p>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Portfolio);
