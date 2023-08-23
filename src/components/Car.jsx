import React, {useEffect} from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three'
import { ErrorBoundary } from "react-error-boundary";

const Car = () => {
  const CAR_SCALE = 1.5;
  const CAR_Y_AXIS = -0.7;
  const gltf = useLoader(GLTFLoader, "/cars/toy_sup_red.glb");
  const carModel = gltf.scene.clone();

  useEffect(() => {
    carModel.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [carModel]);

  return (
    <primitive
      object={carModel}
      position={[0, CAR_Y_AXIS, 0]}
      scale={[CAR_SCALE, CAR_SCALE, CAR_SCALE]}
      castShadow
      receiveShadow
    />
  );
};

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>An error occurred: {error.message}</p>
      <button onClick={resetErrorBoundary}>Reload</button>
    </div>
  );
};

const CarModelWithErrorBoundary = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Car />
    </ErrorBoundary>
  );
};

export default CarModelWithErrorBoundary;
