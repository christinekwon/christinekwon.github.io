// import { GUI } from 'lil-gui';
import * as THREE from 'three';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { Frame, Room, Galaxy } from 'objects';
import { Lights } from 'lights';
import P0 from '../textures/project0.png';
import P1 from '../textures/project1.png';
import P2 from '../textures/project2.png';
import P3 from '../textures/project3.png';
import P4 from '../textures/project4.png';
import ME from '../textures/me.jpg';
import MovingLight from '../lights/MovingLight';
import HELVETICA from '../../fonts/helvetiker/helvetiker_bold.typeface.json';
import { doc } from 'prettier';


class Scene extends THREE.Scene {
    constructor(mobile, material) {
        // Call parent Scene() constructor
        super();

        // Init state
        this.state = {
            // gui: new Dat.GUI(), // Create GUI for scene
            rotationSpeed: 1,
            updateList: [],

        };

        this.collector = [];
        this.background = new THREE.Color(0x000000);

        const lights = new Lights();
        this.add(lights);

        const movingLight = new MovingLight(this);
        this.add(movingLight);
        this.movingLight = movingLight;

        const loader = new THREE.TextureLoader();

        const texture0 = loader.load(P0);
        texture0.encoding = THREE.sRGBEncoding;
        // texture0.wrapS = THREE.RepeatWrapping;
        // texture0.wrapT = THREE.RepeatWrapping;
        // texture0.repeat.set(1, 1);


        const texture1 = loader.load(P1);
        texture1.encoding = THREE.sRGBEncoding;

        const texture2 = loader.load(P2);
        texture2.encoding = THREE.sRGBEncoding;

        const texture3 = loader.load(P3);
        texture3.encoding = THREE.sRGBEncoding;

        const texture4 = loader.load(P4);
        texture4.encoding = THREE.sRGBEncoding;

        this.workMaterials = [
            new THREE.MeshBasicMaterial({ map: texture0 }), //right side
            new THREE.MeshBasicMaterial({ map: texture1 }), //left side
            new THREE.MeshBasicMaterial({ map: texture2 }), //top side
            new THREE.MeshBasicMaterial({ map: texture3 }), //bottom side
            new THREE.MeshBasicMaterial({ map: texture4 }), //front side
            new THREE.MeshBasicMaterial({ map: texture4 }), //back side
        ];

        const bill = loader.load(ME);
        bill.encoding = THREE.sRGBEncoding;

        this.infoMaterial = new THREE.MeshBasicMaterial({
            // color: 0xff85ba
            map: bill
        })

        // const boxGeo = new THREE.BoxGeometry(50, 50, 500);
        // material.side = THREE.DoubleSide
        // let boxMaterial = new THREE.MeshPhongMaterial({
        //     color: 0x922bff,
        //     // color: 0x000000,
        //     side: THREE.DoubleSide
        // })
        // boxMaterial = material.clone();
        // boxMaterial.color.setHex(0x922bff);
        // boxMaterial.sheen = 0;
        // const boxMesh = new THREE.Mesh(boxGeo, [
        //     boxMaterial,
        //     boxMaterial,
        //     boxMaterial,
        //     boxMaterial,
        //     new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.0 }),
        //     boxMaterial,
        // ]);
        // boxMesh.position.set(0, 0, -250);
        // const boxMesh1 = boxMesh.clone().rotateZ(Math.PI / 4);
        // // this.add(boxMesh, boxMesh1);
        // const box = new THREE.Group();
        // box.add(boxMesh, boxMesh1)
        // this.add(box);
        // this.box = box;
        // this.rotateBox;


        this.rooms = [];

        const galaxy = new Galaxy(this, mobile);
        this.add(galaxy);
        this.galaxy = galaxy;


        // const room = new Room(this, material, new THREE.Vector3(0, 0, 0), 0xff4d9a, 0x0000ff);
        // this.add(room);
        // room.scale.multiplyScalar(10);
        // room.position.set(0, 0, -20)

        const frame = new Frame(this, mobile, material);
        this.add(frame);
        // this.add(new Lock(this, mobile, material))

        this.frame = frame;

        this.collector.push(frame, material);

        this.add_rooms();

        // const lock = new Lock(this, mobile, material);
        // this.add(lock);
        // new RGBELoader()
        //     // .setPath('textures/')
        //     .load('textures/royal_esplanade_1k.hdr', function(texture) {

        //         texture.mapping = THREE.EquirectangularReflectionMapping;

        //         material.envMap = gemBackMaterial.envMap = texture;
        //         gemFrontMaterial.needsUpdate = gemBackMaterial.needsUpdate = true;

        //     });



        this.unlock.bind(this);
        this.dispose.bind(this);
    }

    dispose() {
        this.remove(this.frame);
        for (let item of this.collector) {
            item.dispose();
        }
    }

    unlock() {
        // this.add(this.movingLight);
        this.lock.unlock();
        this.lock.stop_pulse();
        this.doors.open(2000);
        this.galaxy.state.animate = 1;
        this.galaxy.state.rotate = 1;
        this.movingLight.shine_heart_light();
        // setTimeout(() => {
        //     // this.grow_info.start();
        //     this.grow_work.start();
        // }, 5000);


        // setTimeout(() => {
        //         this.add_rooms();

        //     }, 3000)
        // setTimeout(() => {
        //     this.rotateBox = 1;
        // }, 6000)

        // setTimeout(() => {
        //     this.rotateBox = 0;
        // }, 8500);
    }

    add_rooms() {
        const size = 1;
        const work = new Room(this, this.workMaterials);
        work.position.set(0, 0, -150);
        work.scale.set(0, 0, 0)
        work.children[0].name = "work";

        // const info = new Room(this, this.infoMaterial);
        // info.position.set(-3, -3, -150);
        // info.scale.set(0, 0, 0)
        // info.children[0].name = "info";
        // this.rooms.push(work.children[0], info.children[0]);
        // this.add(work, info);
        this.rooms.push(work);
        this.add(work);

        const speed = 4000;
        this.grow_work = new TWEEN.Tween(work.scale)
            .to({ x: size, y: size, z: size }, speed)
            // .start();
            // this.grow_info = new TWEEN.Tween(info.scale)
            //     .to({ x: size, y: size, z: size }, speed)
            //     // .start();
    }

    change_material_color(type, color) {

        this.dyson.change_material_color(type, color);
    }



    addToUpdateList(object) {
        this.state.updateList.push(object);
    }

    update(timeStamp) {
        const { rotationSpeed, updateList } = this.state;
        // this.rotation.y = (rotationSpeed * timeStamp) / 10000;

        // if (this.rotateBox) {
        //     this.box.rotation.z += 0.1;
        // }
        // this.mesh.rotation.x += 0.005;
        // this.mesh.rotation.y += 0.005;
        // Call update for each object in the updateList
        for (const obj of updateList) {
            obj.update(timeStamp);
        }
    }
}

export default Scene;