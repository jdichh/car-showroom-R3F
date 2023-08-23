import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Floor from "./components/Floor";
import Lighting from "./components/Lighting";
import Car from "./components/Car";

const App = () => {
  const FOV = 35;
  const NEAR_CLIP = 0.1;
  const FAR_CLIP = 800;
  const POSITION = [0, 2.5, 15];

  const canvasRef = useRef(null);
  const debugCam = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    const camera = new THREE.PerspectiveCamera(
      FOV,
      window.innerWidth / window.innerHeight,
      NEAR_CLIP,
      FAR_CLIP
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      context: canvas.getContext("webgl2"),
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    ///// Moving these inside the render variable causes shadows and tonemapping not to work.
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.autoUpdate = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    const handleResize = () => {
      const windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      renderer.setSize(windowSize.width, windowSize.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      camera.aspect = windowSize.width / windowSize.height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div id="canvas-container">
      <Canvas
        ref={canvasRef}
        camera={{
          position: POSITION,
          fov: FOV,
          near: NEAR_CLIP,
          far: FAR_CLIP,
        }}
        style={{ background: "#323232" }}
      >
        <Lighting />
        <Suspense fallback={null}>
          <Car/>
          <Floor />
        </Suspense>
        <OrbitControls ref={debugCam}/>
      </Canvas>
    </div>
  );
};

export default App;
