import * as THREE from "three";

// The "scene" is where stuff in our game will happen:
var scene = new THREE.Scene();
var flat = { flatShading: true };
var light = new THREE.AmbientLight("white", 0.8);
scene.add(light);

// The "camera" is what sees the stuff:
var aspectRatio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 10000);
camera.position.z = 500;
scene.add(camera);

// The "renderer" draws what the camera sees onto the screen:
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ******** START CODING ON THE NEXT LINE ********
var shape = new THREE.SphereGeometry(100, 20, 15);
var cover = new THREE.MeshNormalMaterial(flat);
var ball = new THREE.Mesh(shape, cover);
scene.add(ball);
ball.position.set(-250, 250, -250);

shape = new THREE.CubeGeometry(300, 100, 20);
var box = new THREE.Mesh(shape, cover);
scene.add(box);
box.rotation.set(0.5, 0.5, 0);
box.position.set(250, 250, -250);

shape = new THREE.CylinderGeometry(1, 100, 100, 4);
var tube = new THREE.Mesh(shape, cover);
scene.add(tube);
tube.rotation.set(0.5, 0, 0);
tube.position.set(250, -250, -250);

shape = new THREE.PlaneGeometry(300, 100);
var ground = new THREE.Mesh(shape, cover);
scene.add(ground);
ground.rotation.set(0.5, 0, 0);
ground.position.set(-250, -250, -250);

shape = new THREE.TorusGeometry(100, 30, 40, 40, 5);
var donut = new THREE.Mesh(shape, cover);
scene.add(donut);

var clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  var t = clock.getElapsedTime();
  ball.rotation.set(t, t * 2, 0);
  box.rotation.set(t, t * 2, 0);
  tube.rotation.set(t, t * 2, 0);
  ground.rotation.set(t, t * 2, 0);
  donut.rotation.set(t, t * 2, 0);

  // Now, show what the camera sees on the screen:
  renderer.render(scene, camera);
}

animate();
