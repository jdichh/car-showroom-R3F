import React from "react";

const Lighting = () => {
  return (
    <>
      <directionalLight
        castShadow={true}
        intensity={3}
        position={[0, 10, 0]}
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
      </directionalLight>
    </>
  );
};

export default Lighting;
