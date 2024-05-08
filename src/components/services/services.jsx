import { forwardRef, useEffect, useRef } from "react";
import "./services.css";
import { animateElement } from "../../utils/utils";

const Services = forwardRef((props, ref) => {
  const el = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const el5 = useRef();

  useEffect(() => {
    const pin1 = animateElement(
      ref,
      el,
      "top+=20% center",
      "bottom center",
      "0",
      "10vh",
      0,
      "power4.out",
      0.1
    );
    const pin2 = animateElement(
      ref,
      el2,
      "top+=20% center",
      "bottom center",
      "0",
      "10vh",
      0.2,
      "power4.out",
      0.1
    );
    const pin3 = animateElement(
      ref,
      el3,
      "top+=20% center",
      "bottom center",
      "0",
      "10vh",
      0.4,
      "power4.out",
      0.1
    );
    const pin4 = animateElement(
      ref,
      el4,
      "top+=20% center",
      "bottom center",
      "0",
      "10vh",
      0.5,
      "power4.out",
      0.1
    );
    const pin5 = animateElement(
      ref,
      el5,
      "top+=20% center",
      "bottom center",
      "0",
      "10vh",
      0.6,
      "power4.out",
      0.1
    );
    return () => {
      pin1.kill();
      pin2.kill();
      pin3.kill();
      pin4.kill();
      pin5.kill();
    };
  }, []);
  return (
    <section className="services" ref={ref} id="services">
      <h2 className="services__title">Наши услуги и цены</h2>
      <ul className="services__list">
        <li className="services__item" ref={el}>
          <p className="services__name">Запись</p>
          <p className="services__price services__price_right">
            1200р/час <br />
            <span className="services__price_high">(в выходные 2000р/час)</span>
          </p>
        </li>
        <li className="services__item" ref={el2}>
          <p className="services__name">Сведение вокала с минусом</p>
          <p className="services__price services__price_right">
            от 3000р <br />
            <span className="services__price_high">
              (В зависимости от сложности)
            </span>
          </p>
        </li>
        <li className="services__item" ref={el3}>
          <p className="services__name">Сведение мультитрека</p>
          <p className="services__price services__price_right">
            от 5000р <br />
            <span className="services__price_high">
              (В зависимости от сложности)
            </span>
          </p>
        </li>
        <li className="services__item" ref={el4}>
          <p className="services__name">Мастеринг трека</p>
          <p className="services__price">1000р</p>
        </li>

        <li className="services__item" ref={el5}>
          <p className="services__name">Продакшн/Аранжировка</p>
          <p className="services__price services__price_right">
            от 10000р <br />
            <span className="services__price_high">
              (В зависимости от сложности)
            </span>
          </p>
        </li>
      </ul>
    </section>
  );
});

export default Services;
