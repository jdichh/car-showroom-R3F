import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Floor from "./components/Floor";

const FOV = 40;
const NEAR_CLIP = 0.1;
const FAR_CLIP = 800;
const POSITION = [0, 40, 175]

const App = () => {
  const canvasRef = useRef(null);
  const debugCam = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const devCam = debugCam.current;

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
        camera={{ position: POSITION, fov: FOV, near: NEAR_CLIP, far: FAR_CLIP }}
        style={{ background: "#323232" }}
      >
        
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Suspense fallback={null}>
          <Floor />
        </Suspense>
        <OrbitControls ref={debugCam}/>
      </Canvas>
    </div>
  );
};

export default App;
