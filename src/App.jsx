import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import * as THREE from "three";
import FloorWithErrorBoundary from "./components/Floor";
import Lighting from "./components/Lighting";
import CarModelWithErrorBoundary from "./components/Car";
import UI from "./components/UI";
import LoadingSpinner from "./components/LoadingSpinner";

const App = () => {
  const FOV = 20;
  const NEAR_CLIP = 0.1;
  const FAR_CLIP = 250;
  const POSITION = [0, 2, 25];

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
            <CarModelWithErrorBoundary />
            <FloorWithErrorBoundary />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.6}
            enablePan={false}
            enableRotate={false}
            enableZoom={false}
          />
        </Canvas>
        <UI />
      </div>
      <Suspense fallback={null}>
        <LoadingSpinner/>
      </Suspense>
    </>
  );
};

export default App;
