// import { useLoader, useFrame } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
// // https://codesandbox.io/s/gltf-animations-re-used-k8phr?file=/src/Model.js:372-442
// import *  as THREE from 'three'
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// export default class ModelClass extends Component {

//   constructor(path) {
//     super();
//     this.model = useLoader(GLTFLoader, path);
//     this.mixer = new THREE.AnimationMixer(model.scene);
//     this.clips = model.animations;
//     this.actions = [];
//     clips.forEach(clip => {
//       actions.push(mixer.clipAction(clip));
//     })
//     this.activeAction = actions[0];
//     this.lastAction = actions[0];
//     useFrame((scene, delta) => {
//       mixer?.update(delta)
//     })
//   }



//   setAction = (toAction) => {
//     if (toAction != this.activeAction) {
//       this.lastAction = this.activeAction
//       this.activeAction = toAction
//       //lastAction.stop()
//       this.lastAction.fadeOut(0.3)
//       this.activeAction.reset()
//       this.activeAction.fadeIn(0.3)
//       this.activeAction.play()
//     }
//   }

//   sayHifunc() {
//     console.log('hi')
//   }

//   render() {
//     return (
//       <primitive
//         object={this.model.scene}
//         scale={props.scale}
//       />
//     )
//   }
// }

