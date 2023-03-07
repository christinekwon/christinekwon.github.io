import * as THREE from "three";
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import HELVETICA from '../../../fonts/helvetiker/helvetiker_bold.typeface.json';

class Room extends THREE.Group {
    constructor(parent, material) {
        // Call parent Group() constructor
        super();

        // Init state
        this.state = {
            // gui: parent.state.gui,
            bob: true,
            twirl: 0,
            blow: false,
            rotSpeed: 0.01
        };

        const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);

        const cube = new THREE.Mesh(cubeGeometry, material);
        this.add(cube);

        // const fontLoader = new FontLoader();
        // // this.textMesh;
        // this.added = 0;
        // fontLoader.load(HELVETICA, function(font) {
        //     const geometry = new TextGeometry('work', {
        //         font: font,
        //         size: 80,
        //         height: 5,
        //         curveSegments: 12,
        //         bevelEnabled: true,
        //         bevelThickness: 10,
        //         bevelSize: 8,
        //         bevelOffset: 0,
        //         bevelSegments: 5
        //     });


        //     let textMesh = new THREE.Mesh(geometry, material);
        //     textMesh.scale.multiplyScalar(0.1);
        //     parent.textMesh = textMesh;
        //     parent.add(textMesh);
        //     console.log(parent)
        //         // console.log(document)
        //         // this.add(textMesh)
        // });

        this.rotation.x = Math.random() * Math.PI;
        this.rotation.y = Math.random() * Math.PI;
        this.rotation.z = Math.random() * Math.PI;

        // Add self to parent's update list
        parent.addToUpdateList(this);

    }


    update(timeStamp) {
        if (this.state.bob) {
            // Bob back and forth
            // this.rotation.z = 0.05 * Math.sin(timeStamp / 300);
        }
        // if (this.textMesh && this.added == 0) {
        //     this.add(this.textMesh)
        //     this.added = 1;
        // }

        this.rotation.x += this.state.rotSpeed;
        this.rotation.y += this.state.rotSpeed;
        this.rotation.z += this.state.rotSpeed;

        TWEEN.update();
    }
}

export default Room;