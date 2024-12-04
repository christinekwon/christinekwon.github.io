/**
 * app.js
 *
 * This is the first file loaded. It sets up the Renderer,
 * Scene and Camera. It also starts the render loop and
 * handles window resizes.
 *
 */

// import document from "../document/index.document";
// import { GUI } from 'lil-gui';

import "../css/base.css";
import "../css/home.css";

import * as THREE from "three";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { WebGLRenderer, PerspectiveCamera, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Scene } from "scenes";
import ROYAL from "../components/scenes/textures/royal_esplanade_1k.hdr";
import { isMobileDevice } from "../js/mobile.js";

// $(function() {
//     'use strict';
//     var options = {
//             prefetch: true,
//             cacheLength: 2,
//             onStart: {
//                 duration: 250, // Duration of our animation
//                 render: function($container) {
//                     // Add your CSS animation reversing class
//                     $container.addClass('is-exiting');

//                     // Restart your animation
//                     smoothState.restartCSSAnimations();
//                 }
//             },
//             onReady: {
//                 duration: 0,
//                 render: function($container, $newContent) {
//                     // Remove your CSS animation reversing class
//                     $container.removeClass('is-exiting');

//                     // Inject the new content
//                     $container.html($newContent);

//                 }
//             }
//         },
//         smoothState = $('#container').smoothState(options).data('smoothState');
// });

// $(function() {
//     $('#container').smoothState();
// });

// $(document).ready(function() {
//     // $("body").css("display", "none");

//     // $("body").fadeOut(2000);

//     $("a.transition").click(function(event) {
//         event.preventDefault();
//         linkLocation = this.href;
//         $("body").fadeOut(1000, redirectPage);
//     });

//     function redirectPage() {
//         window.location = linkLocation;
//     }
// });

document.body.onload = function () {
	// setTimeout(() => {
	const cover = document.getElementById("cover");
	cover.style.transition = "1s";
	document.getElementById("cover").style.opacity = "0";
	// document.getElementById("cover").style.zIndex = "-10";
	// }, 500);
};

let mobile = isMobileDevice();

let envMap = new RGBELoader().load(ROYAL, function (texture) {
	texture.mapping = THREE.EquirectangularReflectionMapping;
});

const light_pink = 0xff85ba;
const dark_pink = 0xff4d9a;

const material = new THREE.MeshPhysicalMaterial({
	color: 0x8f9eff,
	sheen: 1,
	sheenRoughness: 1,
	sheenColor: 0x00ffbb,
	// sheenColor: 0xff7aa9,
	metalness: 1,
	roughness: 0,
	opacity: 1,
	envMap: envMap,
	envMapIntensity: 1,
});

let mouse = {
	x: 0,
	y: 0,
};

function onMouseMove(event) {
	event.preventDefault();
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

document.addEventListener("mousedown", onMouseDown, false);
document.addEventListener("mousemove", onMouseMove, false);

const raycaster = new THREE.Raycaster();
let intersects = 0;
let clicked = 0;

function render() {
	raycaster.setFromCamera(mouse, camera);
	if (scene.lock && !clicked) {
		intersects = raycaster.intersectObject(scene.lock);
		if (intersects.length > 0) {
			// scene.mesh.material.color.setHex(0xff00b3);
			scene.lock.material.color.setHex(dark_pink);
			document.body.style.cursor = "pointer";
		} else {
			scene.lock.material.color.setHex(light_pink);
			document.body.style.cursor = "default";
		}
	}
	if (clicked) {
		document.body.style.cursor = "default";
		intersects = raycaster.intersectObjects(scene.rooms);
		if (intersects.length > 0) {
			document.body.style.cursor = "pointer";
		} else {
			document.body.style.cursor = "default";
		}
	}
}

const start_zoom = 1000;
const camera_speed = 8000;

function onMouseDown(event) {
	event.preventDefault();
	var mouse = new THREE.Vector2();
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	raycaster.setFromCamera(mouse, camera);

	if (!clicked) {
		if (scene.lock) {
			intersects = raycaster.intersectObject(scene.lock);
			if (intersects.length > 0) {
				clicked = 1;
				scene.lock.material.color.setHex(dark_pink);
				scene.unlock();
				// setTimeout(() => {
				//     rotateStars = 1;
				//     // animateStars = 1;,
				// }, 3000);
				// zoom_camera.start();
				// zoom_controls.start();

				setTimeout(() => {
					// rotateStars = 1;
					zoom_camera.start();
					// twist_camera.start();
					// zoom_controls.start();
				}, start_zoom);
				// dispose of frame-related assets
				setTimeout(() => {
					envMap.dispose();
					scene.dispose();
					// renderer.renderLists.dispose();
				}, start_zoom + camera_speed - 1000);

				setTimeout(() => {
					const cover = document.getElementById("cover");
					cover.style.transition = "1s";
					document.getElementById("cover").style.opacity = "1.0";
					// let linkLocation = "./work.html";
					// $("body").fadeOut(2000, redirectPage);
					// //
					// function redirectPage() {
					//     window.location = linkLocation;
					// }
				}, start_zoom + camera_speed);
				setTimeout(() => {
					window.location = "./work.html";
					// let linkLocation = "./work.html";
					// $("body").fadeOut(2000, redirectPage);
					// //
					// function redirectPage() {
					//     window.location = linkLocation;
					// }
				}, start_zoom + camera_speed + 1000);
				// setTimeout(() => {
				//     rotateStars = 0;
				// }, 11000);
			}
		}
	} else {
		if (scene.rooms) {
			intersects = raycaster.intersectObjects(scene.rooms);
			if (intersects.length > 0) {
				const name = intersects[0].object.name;
				if (name == "work") {
					window.location = "./work.html";
				}
				if (name == "info") {
					window.location = "./info.html";
				}
			}
		}
	}
}

// Initialize core ThreeJS components
const scene = new Scene(mobile, material);
const camera = new PerspectiveCamera(
	40,
	window.innerWidth / window.innerHeight,
	1,
	1000
);
const renderer = new WebGLRenderer({ antialias: true });

// const pmremGenerator = new PMREMGenerator(renderer)
// scene.environment = pmremGenerator.fromScene(new RoomEnvironment(scene), 0.04).texture;

// Set up camera
// camera.position.set(0, 0, 20);
camera.position.set(0, 0, 100);
camera.lookAt(new Vector3(0, 0, 0));

// Set up renderer, canvas, and minor CSS adjustments
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
// transform the final color value of each fragment to the sRGB color space
renderer.outputEncoding = THREE.sRGBEncoding;

const canvas = renderer.domElement;
canvas.style.display = "block"; // Removes padding below canvas
document.body.style.margin = 0; // Removes margin around page
document.body.style.overflow = "hidden"; // Fix scrolling
document.body.appendChild(canvas);

// Set up controls
const controls = new OrbitControls(camera, canvas);
controls.enabled = false;
controls.enableDamping = true;
controls.enablePan = false;
// controls.minDistance = 4;
// controls.maxDistance = 16;
controls.maxDistance = 300;
controls.update();

// Render loop
const onAnimationFrameHandler = (timeStamp) => {
	// controls.update();
	renderer.render(scene, camera);
	scene.update && scene.update(timeStamp);
	// positionLight();
	window.requestAnimationFrame(onAnimationFrameHandler);
	render();
};
window.requestAnimationFrame(onAnimationFrameHandler);

// Resize Handler
const windowResizeHandler = () => {
	const { innerHeight, innerWidth } = window;
	renderer.setSize(innerWidth, innerHeight);
	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
};

windowResizeHandler();
window.addEventListener("resize", windowResizeHandler, false);

let minZ = -100;
// if (mobile) {
//     minZ = -300;
// }
const zoom_camera = new TWEEN.Tween(camera.position)
	.to({ x: 0, y: 0, z: minZ }, camera_speed)
	.easing(TWEEN.Easing.Cubic.In);

const twist_camera = new TWEEN.Tween(camera.rotation)
	.to({ x: 0, y: 0, z: Math.PI * 10 }, camera_speed - 1000)
	.easing(TWEEN.Easing.Quadratic.In)
	.delay(1000);

const zoom_controls = new TWEEN.Tween(controls.target).to(
	{ x: 0, y: 0, z: -100 },
	camera_speed
);
// .easing(TWEEN.Easing.Quadratic.In)

// function animate_stars() {
//     if (animateStars) {
//         let array = starGeometry.attributes.position.array;
//         for (let i = 0; i < array.length; i += 3) {
//             velocity[i / 3] += acceleration;
//             array[i + 2] += velocity[i / 3];
//             if (array[i + 2] >= minZ + lengthZ) {
//                 array[i + 2] = minZ;
//                 velocity[i / 3] = Math.random() * 5;
//             }
//         }
//         starGeometry.attributes.position.needsUpdate = true;
//     }

//     if (rotateStars) {
//         stars.rotation.z += 0.02;
//         // stars.rotation.y = 0.05 * Math.sin(timeStamp / 500);
//         // stars.rotation.x = 0.05 * Math.sin(timeStamp / 500);
//     }
//     // stars.rotation.z += 0.01;
// }
