import React, {useEffect} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import FloorWithErrorBoundary from "./components/Floor";
import Lighting from "./components/Lighting";
import Car from "./components/Car";
import UI from "./components/UI";
import MusicPlayer from "./components/MusicPlayer";
import LightProps from "./components/LightProps";

const App = () => {
  const FOV = 20;
  const NEAR_CLIP = 0.1;
  const FAR_CLIP = 250;
  const POSITION = [0, 3, 24];

  useEffect(() => {
    if (!WebGL.isWebGLAvailable()) {
      const warning = WebGL.getWebGLErrorMessage();
      document.getElementById("container").appendChild(warning);
    }
  });

  return (
    <>
      <div id="canvas-container">
        <Canvas
          shadows
          camera={{
            position: POSITION,
            fov: FOV,
            near: NEAR_CLIP,
            far: FAR_CLIP,
          }}
          style={{ background: "#060606" }}
          gl={{
            antialias: true,
            alpha: true,
            shadowMap: {
              enabled: true,
              type: THREE.PCFSoftShadowMap,
            },
            toneMapping: THREE.LinearToneMapping,
            toneMappingExposure: 2.5,
            dpr: Math.min(window.devicePixelRatio, 2),
          }}
        >
          <Lighting />
          <LightProps />
          <Car/>
          <FloorWithErrorBoundary />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            enablePan={false}
            enableRotate={false}
            enableZoom={false}
          />
        </Canvas>
        <UI />
        <MusicPlayer />
      </div>
    </>
  );
};

export default App;
