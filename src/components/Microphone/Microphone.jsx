import { Box, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

export default function Microphone() {
  const { scene } = useGLTF("/recording-studio/microphone.glb");
  const ref = useRef();
  const [position, setPosition] = useState([0, 0, 3]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setPosition([0, 0, 2.5]);
      } else {
        setPosition([0, 0, 3]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.2 * delta;
  });

  return (
    <primitive object={scene} position={position} rotation-y={1.3} ref={ref} />
  );
}
