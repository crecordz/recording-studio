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
function App() {
  return (
    <>
      <Header />
      <Info />
      <Services />
      <About />
      <Contacts />
      <Footer />
      <div className="background">
        <Canvas>
          <Sparkles
            count={200}
            speed={0.3}
            size={1.3}
            scale={13}
            opacity={0.8}
            noise={0.1}
          />
        </Canvas>
      </div>
    </>
  );
}

export default App;
