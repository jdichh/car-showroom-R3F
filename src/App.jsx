import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import FloorWithErrorBoundary from "./components/Floor";
import Lighting from "./components/Lighting";
import CarModelWithErrorBoundary from "./components/Car";

const App = () => {
  const FOV = 35;
  const NEAR_CLIP = 0.1;
  const FAR_CLIP = 800;
  const POSITION = [0, 2.5, 15];

  return (
    <div id="canvas-container" style={{ width: "100%", height: "100%" }}>
      <Canvas
        shadows
        camera={{
          position: POSITION,
          fov: FOV,
          near: NEAR_CLIP,
          far: FAR_CLIP,
        }}
        style={{ background: "#323232" }}
        gl={{
          antialias: true,
          alpha: true,
          shadowMap: {
            enabled: true,
            type: THREE.PCFSoftShadowMap,
          },
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
          dpr: Math.min(window.devicePixelRatio, 2)
        }}
      >
        <Lighting />
        <Suspense fallback={null}>
          <CarModelWithErrorBoundary />
          <FloorWithErrorBoundary />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;