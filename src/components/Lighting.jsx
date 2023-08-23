import React from "react";

const Lighting = () => {
  return (
    <>
      <directionalLight
        castShadow
        intensity={2}
        position={[0, 30, 0]}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={10}
        shadow-camera-far={100}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-bias={-0.0025}
      />
    </>
  );
};

export default Lighting;
