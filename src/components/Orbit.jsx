import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend, useThree } from '@react-three/fiber';
import * as THREE from 'three'
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return (
    <orbitControls
      args={[camera, gl.domElement]}
      // maxDistance={60}
      // minDistance={30}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={0}
      target={new THREE.Vector3(0, 2, 0)}
    />
  )
}

export default Orbit;