// S: Scene - Create the scene (new THREE.Scene()).
// C: Camera - Add a camera to view the scene (new THREE.PerspectiveCamera()).
// R: Renderer - Render the scene (new THREE.WebGLRenderer()).
// A: Add objects - Add meshes, lights, or geometries.
// M: Mount renderer - Attach the renderer to the DOM.

/* <=========================================================================================> */

// S: Scene
const scene = new THREE.Scene();

// C: Camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near plane
  1000 // Far plane
);
camera.position.z = 5; // Position the camera

// R: Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // M: Mount renderer

// A: Add objects (Mesh: Geometry + Material)
const geometry = new THREE.BoxGeometry(1, 1, 1); // A box
const material = new THREE.MeshBasicMaterial({ color: "blue" }); // Blue color
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); // Add cube to the scene

// Render the scene
renderer.render(scene, camera);
