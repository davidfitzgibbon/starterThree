import * as THREE from "three";

class Renderer {
  constructor(sketch, settings) {
    this.sketch = sketch;
    this.settings = { ...settings };
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;

    this.renderer.update = this.update.bind(this.sketch);

    return this.renderer;
  }
  update() {
    this.renderer.render(this.scene, this.camera);
  }
}
export default Renderer;
