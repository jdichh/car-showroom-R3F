import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ErrorBoundary } from "react-error-boundary";

const Car = () => {
  const CAR_SCALE = 1.5;
  const CAR_Y_AXIS = -0.7;
  const gltf = useLoader(GLTFLoader, "/cars/toy_sup_red.glb");
  const carModel = gltf.scene.clone();

  return (
    <primitive
      object={carModel}
      position={[0, CAR_Y_AXIS, 0]}
      scale={[CAR_SCALE, CAR_SCALE, CAR_SCALE]}
      castShadow={true}
      receiveShadow={true}
    />
  );
};

// const ErrorFallback = ({ error, resetErrorBoundary }) => {
//   return (
//     <div>
//       <p>An error occurred: {error.message}</p>
     
//     </div>
//   );
// };

// const CarModelWithErrorBoundary = () => {
//   return (
//     <ErrorBoundary FallbackComponent={ErrorFallback}>
//       <Car />
//     </ErrorBoundary>
//   );
// };

export default Car;
