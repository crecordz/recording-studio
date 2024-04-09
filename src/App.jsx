import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import Equipment from "./components/equipment/equipment";
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
import { useEffect, useRef, useState } from "react";
import Reviews from "./components/reviews/reviews";
import Chat from "./components/chat/chat";
import { ScrollToPlugin } from "gsap/all";
import AboutUs from "./components/about-us/about-us";
import Microphone from "./components/Microphone/Microphone";
import { OrbitControls } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const aboutUsRef = useRef();
  const servicesRef = useRef();
  const equipmentRef = useRef();
  const portfolioRef = useRef();
  const photoRef = useRef();
  const reviewRef = useRef();
  const contactsRef = useRef();
  const mainRef = useRef();

  const [isHeaderColored, setIsHeaderColored] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutUsTop = aboutUsRef.current.getBoundingClientRect().bottom;
      const isAboutUsVisible = aboutUsTop <= window.innerHeight;
      setIsHeaderColored(isAboutUsVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollClick = (target) => {
    gsap.to(window, { duration: 1, scrollTo: target });
  };

  return (
    <>
      <Header
        isHeaderColored={isHeaderColored}
        handleAboutUsClick={() => handleScrollClick(aboutUsRef.current)}
        handleServicesClick={() => handleScrollClick(servicesRef.current)}
        handleEquipmentClick={() => handleScrollClick(equipmentRef.current)}
        handlePhotoClick={() => handleScrollClick(photoRef.current)}
        handleReviewsClick={() => handleScrollClick(reviewRef.current)}
        handleContactsClick={() => handleScrollClick(contactsRef.current)}
        handleMainClick={() => handleScrollClick(mainRef.current)}
        handlePortfolioClick={() => handleScrollClick(portfolioRef.current)}
      />
      <Info ref={mainRef} />
      <AboutUs ref={aboutUsRef} />
      <Services ref={servicesRef} />
      <Equipment ref={equipmentRef} />
      <Portfolio ref={portfolioRef} />
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
