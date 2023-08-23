import React, {useEffect} from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ErrorBoundary } from "react-error-boundary";

const DEFAULT = {
  scale: 1,
  x_axis: 0,
  y_axis: -0.75,
  z_axis: 0
}

const NSX = {
  scale: 3.75,
  x_axis: 2,
  y_axis: -2.66,
  z_axis: -2.55
}

const LARGER_SCALE = {
  scale: 2.25,
}


const Car = () => {
  const gltf = useLoader(GLTFLoader, "/cars/maserati_ghibli.glb");
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
      position={[DEFAULT.x_axis, DEFAULT.y_axis, DEFAULT.z_axis]}
      rotation={[0, -0.75, 0]}
      scale={[LARGER_SCALE.scale, LARGER_SCALE.scale, LARGER_SCALE.scale]}
      castShadow={true}
      receiveShadow={true}
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
