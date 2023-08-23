import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const rearLights = {
  scale: 1,
  x_axis: -0.01,
  y_axis: -0.71,
  z_axis: -29.4,
};

const frontLights = {
  scale: 1,
  x_axis: -0.01,
  y_axis: -0.71,
  z_axis: 29.4,
};

const leftLights = {
  scale: 1,
  x_axis: -29.4,
  y_axis: -0.71,
  z_axis: -0.02,
};

const rightLights = {
  scale: 1,
  x_axis: 29.4,
  y_axis: -0.71,
  z_axis: -0.02,
};

const LightProps = () => {
  const gltf = useLoader(GLTFLoader, "/props/simple_studio_light.glb");
  const rearLightProps = gltf.scene.clone();
  const frontLightProps = gltf.scene.clone();
  const leftLightProps = gltf.scene.clone();
  const rightLightProps = gltf.scene.clone();

  return (
    <>
      <primitive
        object={rearLightProps}
        position={[rearLights.x_axis, rearLights.y_axis, rearLights.z_axis]}
        rotation={[0, 0, 0]}
        scale={[rearLights.scale, rearLights.scale, rearLights.scale]}
        castShadow={true}
        receiveShadow={true}
      />

      <primitive
        object={frontLightProps}
        position={[frontLights.x_axis, frontLights.y_axis, frontLights.z_axis]}
        rotation={[0, 3, 0]}
        scale={[frontLights.scale, frontLights.scale, frontLights.scale]}
        castShadow={true}
        receiveShadow={true}
      />

      <primitive
        object={leftLightProps}
        position={[leftLights.x_axis, leftLights.y_axis, leftLights.z_axis]}
        rotation={[0, 1.5, 0]}
        scale={[leftLights.scale, leftLights.scale, leftLights.scale]}
        castShadow={true}
        receiveShadow={true}
      />

      <primitive
        object={rightLightProps}
        position={[rightLights.x_axis, rightLights.y_axis, rightLights.z_axis]}
        rotation={[0, 4.8, 0]}
        scale={[rightLights.scale, rightLights.scale, rightLights.scale]}
        castShadow={true}
        receiveShadow={true}
      />
    </>
  );
};

export default LightProps;
