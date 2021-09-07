import React from 'react'
import * as THREE from 'three';

const Floor = props => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow  >
      <planeBufferGeometry args={[100, 100]} />
      <meshBasicMaterial side={THREE.DoubleSide} />

    </mesh>
  )
}

export default Floor;