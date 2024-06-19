import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

export default function Microphone() {
  const { scene } = useGLTF("/microphone.glb");
  const ref = useRef();
  const [position, setPosition] = useState([0, 0, 3]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280 && window.innerWidth > 955) {
        setPosition([0, 0, 2.5]);
      } else if (window.innerWidth <= 955 && window.innerWidth > 715) {
        setPosition([0, 0, 3]);
      } else if (window.innerWidth <= 715) {
        setPosition([0, 0, 3]);
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
