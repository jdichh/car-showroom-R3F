import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
import { ErrorBoundary } from "react-error-boundary";

const Floor = () => {
  const [colorMap, displacementMap, normalMap, aoMap] = useLoader(
    TextureLoader,
    [
      "./floor/concrete1k/Concrete042A_1K_Color.png",
      "./floor/concrete1k/Concrete042A_1K_Displacement.png",
      "./floor/concrete1k/Concrete042A_1K_NormalGL.png",
      "./floor/concrete1k/Concrete042A_1K_AmbientOcclusion.png",
    ]
  );

  const TEX_SCALE = 15;
  const PLANE_WIDTH = 225;
  const PLANE_HEIGHT = 225;

  [colorMap, displacementMap, normalMap, aoMap].forEach((tex) => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(TEX_SCALE, TEX_SCALE);
  });

  const geometry = new THREE.PlaneGeometry(PLANE_WIDTH, PLANE_HEIGHT);
  const material = new THREE.MeshLambertMaterial({
    map: colorMap,
    displacementMap: displacementMap,
    displacementScale: 0.1,
    normalMap: normalMap,
    normalMapType: THREE.TangentSpaceNormalMap,
    aoMap: aoMap,
    aoMapIntensity: 1,
  });

  return (
    <mesh
      geometry={geometry}
      material={material}
      receiveShadow
      castShadow
      rotation-x={-Math.PI / 2}
      position-y={-0.8}
    />
  );
}

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>An error occurred: {error.message}</p>
      <button onClick={resetErrorBoundary}>Reload</button>
    </div>
  );
};

const FloorWithErrorBoundary = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Floor />
    </ErrorBoundary>
  );
};

export default FloorWithErrorBoundary;