var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/// * Rotating Cube * ///

// var geometry = new THREE.BoxGeometry(3, 3, 3);
// var edges = new THREE.EdgesGeometry(geometry)
// var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x000000}))
// var material = new THREE.MeshBasicMaterial({color: 0x004DFF});
// var cube = new THREE.Mesh(geometry, material);
// scene.add(line);
// scene.add(cube);
// camera.position.z = 5;

// function animate(){
//     requestAnimationFrame(animate);
//     // cube.rotation.x += .01;
//     // line.rotation.x += .01;
//     cube.rotation.y += .01;
//     line.rotation.y += .01;
//     renderer.render(scene, camera);
// };

// animate();



/// * Rotating Sphere * ///

var geometry = new THREE.SphereGeometry(10, 100, 100);
var edges = new THREE.EdgesGeometry(geometry);
var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x000000}));
var material = new THREE.MeshBasicMaterial({color: 0x004DFF});
var sphere = new THREE.Mesh(geometry, material);
scene.add(line);
scene.add(sphere);
camera.position.z = 20;

function animate(){
    requestAnimationFrame(animate);
    // sphere.rotation.y += .001;
    renderer.render(scene, camera);
}

animate();



/// * Interactive Sphere * ///
// var controls = new THREE.OrbitControls( camera, renderer.domElement );

// let geometry = new THREE.SphereGeometry(10, 100, 100);
// let edges = new THREE.EdgesGeometry(geometry);
// let line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0x000000}));
// let material = new THREE.MeshBasicMaterial({color: 0x004DFF});
// let sphere = new THREE.Mesh(geometry, material);
// scene.add(line);
// scene.add(sphere);
// camera.position.z = 20;
// controls.update();

// function animate(){
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// };

// animate();