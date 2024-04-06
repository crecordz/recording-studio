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
import { ScrollToPlugin } from "gsap/all";
import video from "./video/video.MOV";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const sectionRef = useRef();
  const triggerRef = useRef();
  const servicesRef = useRef();
  const equipmentRef = useRef();
  const photoRef = useRef();
  const reviewRef = useRef();
  const contactsRef = useRef();
  const mainRef = useRef();

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1800, top",
          pin: true,
          scrub: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  const handleScrollClick = (target) => {
    const containerRect = sectionRef.current.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const offset = targetRect.left - containerRect.left;
    gsap.to(window, { duration: 1, scrollTo: target });

    // if (target === servicesRef.current || target === equipmentRef.current) {
    //   gsap.to(target, { duration: 1, x: offset });
    // }
  };

  return (
    <>
      <Header
        handleServicesClick={() => handleScrollClick(servicesRef.current)}
        handleEquipmentClick={() => handleScrollClick(equipmentRef.current)}
        handlePhotoClick={() => handleScrollClick(photoRef.current)}
        handleReviewsClick={() => handleScrollClick(reviewRef.current)}
        handleContactsClick={() => handleScrollClick(contactsRef.current)}
        handleMainClick={() => handleScrollClick(mainRef.current)}
      />
      <Info ref={mainRef} />
      {/* <div className="scroll-section-outer" ref={triggerRef}>
        <div className="scroll-section-inner" ref={sectionRef}> */}
      <Services ref={servicesRef} />
      <About ref={equipmentRef} />
      {/* </div>
      </div> */}
      <Portfolio />
      <Photo ref={photoRef} />
      <Reviews ref={reviewRef} />
      <Contacts ref={contactsRef} />
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
