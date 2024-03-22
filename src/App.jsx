import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Info from "./components/info/info";
import Services from "./components/services/services";
import Portfolio from "./components/Portfolio/portfolio";
import ThreeElement from "./components/ThreeElement/ThreeElement";
import Photo from "./components/photo/photo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000, top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <>
      <Header />
      <Info />
      <div className="scroll-section-outer">
        <div ref={triggerRef}>
          <div className="scroll-section-inner" ref={sectionRef}>
            <Services />
            <About />
            <Portfolio />
            <Photo />
          </div>
        </div>
      </div>
      <Contacts />
      <Footer />
      <div className="background">
        <Canvas>
          <ThreeElement />
        </Canvas>
      </div>
    </>
  );
}

export default App;
