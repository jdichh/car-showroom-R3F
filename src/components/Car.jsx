import React, { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html } from "@react-three/drei";
import LoadingSpinner from "./LoadingSpinner";

const DEFAULT = {
  scale: 1,
  x_axis: 0,
  y_axis: -0.75,
  z_axis: 0,
  y_rotation: -0.75
};

const GHIBLI = {
  scale: 2.25,
};

const Car = () => {
  const [model, setModel] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/cars/maserati_ghibli.glb",
      (gltf) => {
        const carModel = gltf.scene.clone();
        carModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        setModel(carModel);
        setIsLoading(false);
      },
      undefined,
      (error) => console.error(error)
    );
  }, []);

  return isLoading ? (
    <Html
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoadingSpinner />
    </Html>
  ) : (
    <primitive
      object={model}
      position={[DEFAULT.x_axis, DEFAULT.y_axis, DEFAULT.z_axis]}
      rotation={[0, DEFAULT.y_rotation, 0]}
      scale={[GHIBLI.scale, GHIBLI.scale, GHIBLI.scale]}
      castShadow={true}
      receiveShadow={true}
    />
  );
};

export default Car;
