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
import Reviews from "./components/reviews/reviews";
import Chat from "./components/chat/chat";

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
        translateX: "-100vw",
        ease: "none",
        duration: 3,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000, top",
          pin: true,
          scrub: 1,
          // snap: 1,
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
      <div className="scroll-section-outer" ref={triggerRef}>
        <div className="scroll-section-inner" ref={sectionRef}>
          <Services />
          <About />
        </div>
      </div>
      <Portfolio />
      <Photo />
      <Reviews />
      <Contacts />
      <Footer />
      <div className="background">
        <Canvas>
          <ThreeElement />
        </Canvas>
      </div>
      <Chat />
    </>
  );
}

export default App;
