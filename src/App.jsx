import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Floor from "./components/Floor";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const camera = new THREE.PerspectiveCamera(
      15,
      window.innerWidth / window.innerHeight,
      0.1,
      250
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
        camera={{ position:[0, 10, 60], fov: 30, near: 0.1, far: 250 }}
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
      </Canvas>
    </div>
  );
};

export default App;
