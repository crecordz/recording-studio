import "./portfolio.css";

import CardProfile from "../AudioPlayer/audio-player";
import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Portfolio(props, ref) {
  const audio = useRef();
  const paragraph = useRef();
  const paragraph2 = useRef();
  useEffect(() => {
    const pin = gsap
      .timeline({
        scrollTrigger: {
          trigger: audio.current,
          start: "top center",
          end: "bottom center",
          markers: true,
        },
      })
      .fromTo(
        audio.current,
        { x: "-20vw", opacity: 0 },
        { x: "0", opacity: 1, duration: 1 }
      );

    const pin2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: paragraph.current,
          start: "top center",
          end: "bottom center",
          markers: true,
        },
      })

      .fromTo(
        paragraph.current,
        { x: "20vw", opacity: 0 },
        { x: "0", opacity: 1, duration: 1 }
      );
    const pin3 = gsap
      .timeline({
        scrollTrigger: {
          trigger: paragraph2.current,
          start: "top center",
          end: "bottom center",
          markers: true,
        },
      })

      .fromTo(
        paragraph2.current,
        { x: "20vw", opacity: 0 },
        { x: "0", opacity: 1, duration: 1 }
      );
    return () => {
      pin.kill();
      pin2.kill();
      pin3.kill();
    };
  }, []);
  return (
    <section className="portfolio" ref={ref}>
      <h2 className="portfolio_title">Некоторые примеры наших работ</h2>
      <div className="portfolio__wrapper">
        <div className="portfolio__audio" ref={audio}>
          <div className="audioitems">
            <CardProfile />
          </div>
        </div>
        {/* <div className="portfolio__video" ref={video}>
          <h3 className="portfolio__subtitle">Посмотреть</h3>
          <div className="portfolio__video-container">
            <iframe
              src="https://vk.com/video_ext.php?oid=531333562&id=456240488&hd=3&hash=665ed9df899a7c4e"
              width="426"
              height="240"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://vk.com/video_ext.php?oid=-172161883&id=456239176"
              width="426"
              height="240"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://vk.com/video_ext.php?oid=-172161883&id=456239171"
              width="426"
              height="240"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://vk.com/video_ext.php?oid=-172161883&id=456239144"
              width="426"
              height="240"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div> */}
        <div className="portfolio__paragraph">
          <p className="portfolio__item" ref={paragraph}>
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
            для выставки "Россия" на ВДНХ, который озвучила известная актриса
            театра и кино Екатерина Гусева.{" "}
          </p>
          <p className="portfolio__item">А Клара у Карла украла кларнет</p>
          <p className="portfolio__item">Карл у Клары украл каралы</p>
          <p className="portfolio__item">А Клара у Карла украла кларнет</p>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Portfolio);
