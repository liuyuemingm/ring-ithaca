import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const Box = props => {
  const ref = useRef();
  useFrame(state => {
    ref.current.rotation.x += 0.01;
  })
  return (
    <mesh ref={ref} {...props} position={[0, 2, 0]} castShadow receiveShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial />
    </mesh>
  )
}

export default Box;




