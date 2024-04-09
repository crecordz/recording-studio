import { Box, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Microphone() {
  const fox = useGLTF("./microphone.glb");
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += 0.2 * delta;
  });

  return (
    <primitive
      object={fox.scene}
      // scale={0.02}
      position={[-2.2, -0.1, 2.5]}
      rotation-y={1.3}
      ref={ref}
    />
  );
}
