import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Group } from "three";
import { Button } from "@material-ui/core";

class ThreeScene extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

    this.scene = new THREE.Scene();

    //Add Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#222222");
    this.renderer.setSize(500, 500);
    this.mount.appendChild(this.renderer.domElement);
    console.log(this)

    //add Camera
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    this.camera.position.z = 20;
    this.camera.position.y = 5;

    //Camera Controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);

    //LIGHTS
    var lights = [];
    lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    this.scene.add(lights[0]);
    this.scene.add(lights[1]);
    this.scene.add(lights[2]);

    //Simple Box with WireFrame
    this.addModels();

    this.renderScene();
    //start animation
    this.start();

  }

  addModels() {
    // cube
    // const geometry = new THREE.BoxGeometry(5, 5, 5);
    // const material = new THREE.MeshBasicMaterial({
    //   color: "#0F0"
    // });
    // this.cube = new THREE.Mesh(geometry, material);
    // this.scene.add(this.cube);
    // new THREE.TextureLoader().load(
    //   "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //   texture => {
    //     //Update Texture
    //     this.cube.material.map = texture;
    //     this.cube.material.needsUpdate = true;
    //   },
    //   xhr => {
    //     //Download Progress
    //     console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    //   },
    //   error => {
    //     //Error CallBack
    //     console.log("An error happened" + error);
    //   }
    // );

    // loading model

    var gltfLoader = new GLTFLoader();
    let mixer;
    let modelReady;
    let actions;
    let activeAction;
    let lastAction;
    let clock;

    gltfLoader.load("models/animationTest.glb",
      (model) => {
        // gltf.scene.scale.set(.01, .01, .01)
        this.clock = new THREE.Clock()
        this.mixer = new THREE.AnimationMixer(model.scene)
        this.clips = model.animations;
        this.modelReady = false;
        this.actions = [];
        this.clips.forEach(function (clip) {
          this.actions.push(this.mixer.clipAction(clip));
        }, this)

        this.activeAction = this.actions[2];
        this.lastAction = this.actions[2];

        this.activeAction = this.mixer.clipAction(this.clips[0])

        this.scene.add(model.scene)
        this.modelReady = true
      },
      xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      error => {
        console.log("An error happened" + error);
      }
    );

  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    // requestAnimationFrame(this.animate)
    // this.setAction(this.actions[1].bind(this))

    if (this.modelReady) this.mixer.update(this.clock.getDelta())
    if (this.cube) this.cube.rotation.y += 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };
  render() {
    return (

      <>
        <div
          style={{ width: "800px", height: "800px" }}
          ref={mount => {
            this.mount = mount;
          }}
        />
        <Button
          onClick={() => { this.setAction(1) }}
          style={{
            position: 'absolute',
            bottom: '20vh',
            left: '40vw',
            background: 'purple'
          }} >点我！</Button>
      </>


    );
  }

  setAction(num) {
    let toAction = this.actions[num]
    if (toAction != this.activeAction) {
      this.lastAction = this.activeAction
      this.activeAction = toAction
      //lastAction.stop()
      this.lastAction.fadeOut(0.3)
      this.activeAction.reset()
      this.activeAction.fadeIn(0.3)
      this.activeAction.play()
    }
  }

  static printActions() {
    console.log(this)
  }

}
export default ThreeScene;
