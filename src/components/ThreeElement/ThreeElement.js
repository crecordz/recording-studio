import "./ThreeElement.css";
import { useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState } from "react";
import mainPicture from "../../images/info.jpg";
import { TextureLoader } from "three";
const textureLoader = new TextureLoader();
const mainPictureTexture = textureLoader.load(mainPicture);

const ColorShiftMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: mainPictureTexture,
    uVelo: 0.3,
    uMouse: new THREE.Vector2(0, 0),
    tDiffuse: null,
  },
  `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
  `
      uniform float uTime;
      uniform sampler2D uTexture;
      varying vec2 vUv;
      uniform vec2 uMouse;
      uniform float uVelo;

      float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
        uv -= disc_center;
        float dist = sqrt(dot(uv, uv));
        return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
      }
     
      void main() {
        vec2 newUV = vUv;
        float displacement = length(uMouse - vUv) * uVelo;
    
        vec2 displacedUV = vUv + (uMouse - vUv) * displacement;

        float c = circle(newUV, uMouse, 0.05, 0.01+uVelo*0.1)*2.*uVelo;
        vec2 warpedUV = mix(vUv, uMouse, c * 0.8); 

        vec4 textureColor = texture2D(uTexture, displacedUV);
        
        // Apply color shift effect
        vec4 shiftedColor = textureColor;
        shiftedColor.r = texture2D(uTexture, warpedUV).r;
        shiftedColor.g = texture2D(uTexture, warpedUV).g;
        shiftedColor.b = texture2D(uTexture, warpedUV).b;
        
        // Apply warping effect
        vec2 warpedTexCoord = mix(vUv, warpedUV, 0.9);
        vec4 warpedTexture = texture2D(uTexture, warpedTexCoord);
        
        // Combine color shift and warping
        vec4 finalColor = mix(shiftedColor, warpedTexture, 0.5);
        
        gl_FragColor = vec4(finalColor.rgb, 1.0);
    }
    `
);

extend({ ColorShiftMaterial });

export default function ThreeElement() {
  const ref = useRef();
  const [uMouse, setUMouse] = useState(new THREE.Vector2(0, 0));

  useFrame((state, delta) => {
    ref.current.uTime += delta * 2;
    ref.current.uniforms.uMouse.value = uMouse;
  });
  return (
    <mesh
      scale={[22, 10, 5]}
      onPointerMove={(e) => {
        setUMouse(e.intersections[0].uv);
      }}
    >
      <planeGeometry />
      <colorShiftMaterial ref={ref} />
    </mesh>
  );
}
