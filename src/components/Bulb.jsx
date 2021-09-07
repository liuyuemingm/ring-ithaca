import React from 'react'

const Bulb = props => {
  return (
    <mesh position={[0, 3, 0]} castShadow>
      <pointLight castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <sphereBufferGeometry args={[0.2]} />
      <meshPhongMaterial emissive='yellow' />
    </mesh>
  );
}

export default Bulb
