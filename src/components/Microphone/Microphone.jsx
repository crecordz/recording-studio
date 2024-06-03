import { Box, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Microphone() {
  const { scene } = useGLTF("/recording-studio/microphone.glb");
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += 0.2 * delta;
  });

  return (
    <primitive object={scene} position={[0, 0, 3]} rotation-y={1.3} ref={ref} />
  );
}
