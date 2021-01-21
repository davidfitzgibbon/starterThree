import * as THREE from "three";

class Events {
  constructor(sketch, settings) {
    this.sketch = sketch;
    this.settings = { ...settings };

    this.addEvents();
  }
  addEvents() {
    window.addEventListener("resize", this.onWindowResize.bind(this), false);
  }
  onWindowResize() {
    this.sketch.camera.aspect = window.innerWidth / window.innerHeight;
    this.sketch.camera.updateProjectionMatrix();
    this.sketch.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
export default Events;
