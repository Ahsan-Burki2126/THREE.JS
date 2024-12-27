const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: "white" });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(
  90,
  size.width / size.height,
  0.1,
  10
);
camera.position.z = 6;
scene.add(camera);

// Adding edges
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({
  color: "red",
  linewidth: 6,
});
const lineSegments = new THREE.LineSegments(edges, lineMaterial);
scene.add(lineSegments);

// rendering
const target = document.querySelector(".wbgl");
const renderer = new THREE.WebGLRenderer({ canvas: target });

renderer.setSize(size.width, size.height);

function render() {
  renderer.render(scene, camera);
}

// Call render once to display the static scene
render();

console.log(renderer.domElement);
