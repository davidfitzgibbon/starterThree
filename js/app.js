import * as THREE from "three";

import Scene from "./components/scene";
import Renderer from "./components/renderer";
import Controls from "./components/controls";
import Camera from "./components/camera";
import Lights from "./components/lights";
import Events from "./components/events";
import Animator from "./components/animator";

import fragment from "../shader/fragment.js";
import vertex from "../shader/vertex.js";

class Sketch {
  constructor() {
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.scene = new Scene(this);
    this.renderer = new Renderer(this);
    this.camera = new Camera(this);
    this.lights = new Lights(this);
    this.controls = new Controls(this);
    this.events = new Events(this);
    this.animator = new Animator(this);
    this.loader = new Loader(this, {
      load: () => {
        this.setUpMaterials();
        this.resetMaterials();
      },
    });
  }
  init() {
    this.addObjects();
    document.body.appendChild(this.renderer.domElement);
    this.animator.animate();
  }
  addObjects() {
    let planeGeometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
    let planeMaterial = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {},
      vertexShader: vertex,
      fragmentShader: fragment,
    });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    this.scene.add(plane);

    // this.animator.add(() => console.log("working"));
  }
}

export default Sketch;
