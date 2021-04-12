import * as THREE from "three";
class Loader {
  constructor(sketch, settings) {
    this.settings = {
      load: () => {
        console.log("loaded");
      },
      progress: () => true,
      ...settings,
    };
    this.manager = new THREE.LoadingManager(
      () => this.settings.load(),
      () => this.settings.progress()
    );
  }
}
export default Loader;
