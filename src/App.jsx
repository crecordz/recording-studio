import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import About from "./components/about/about";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Info from "./components/info/info";
import Services from "./components/services/services";
import { useRef, useState } from "react";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import Portfolio from "./components/Portfolio/portfolio";
import ThreeElement from "./components/ThreeElement/ThreeElement";
function App() {
  return (
    <>
      <Header />
      <Info />
      <Services />
      <About />
      <Portfolio />
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
