import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
// https://codesandbox.io/s/gltf-animations-re-used-k8phr?file=/src/Model.js:372-442
import *  as THREE from 'three'
import PlayButton from './PlayButton'

let sayHi = () => { console.log('asdf') };

const Model = props => {
  const model = useLoader(
    GLTFLoader,
    props.path
  );

  const mixer = new THREE.AnimationMixer(model.scene);
  const clips = model.animations;

  let actions = [];
  clips.forEach(clip => {
    actions.push(mixer.clipAction(clip));
  })

  let activeAction = actions[0];
  let lastAction = actions[0];

  const setAction = (toAction) => {
    if (toAction != activeAction) {
      lastAction = activeAction
      activeAction = toAction
      //lastAction.stop()
      lastAction.fadeOut(0.3)
      activeAction.reset()
      activeAction.fadeIn(0.3)
      activeAction.play()
    }
  }

  useFrame((scene, delta) => {
    mixer?.update(delta)
  })

  setTimeout(() => { setAction(actions[2]) }, 1000);

  console.log(actions)

  model.scene.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
    }
  })

  const handlePointerDown = e => {
    e.object.active = true;
    window.activeMesh = e.object
  }

  sayHi = () => {
    console.log('hi')
  }


  const handlePointerEnter = e => {
    e.object.scale.x = 1.5
    e.object.scale.x = 1.5
    e.object.scale.x = 1.5
  }
  const handlePointerLeave = e => {
    e.object.scale.x = 1
    e.object.scale.x = 1
    e.object.scale.x = 1
  }

  return (
    <>
      <primitive
        object={model.scene}
        scale={props.scale}
        onPointerDown={handlePointerDown}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      />
      {/* <PlayButton /> */}
    </>
  )
}

export { Model, sayHi };

