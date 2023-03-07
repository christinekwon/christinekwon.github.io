import * as THREE from "three";
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import HEART from '../../../images/heart1.png';

class Galaxy extends THREE.Group {
    constructor(parent, mobile) {
        // Call parent Group() constructor
        super();

        // Init state
        this.state = {
            // gui: parent.state.gui,
            bob: true,
            twirl: 0,
            blow: false,
            rotate: 0,
            animate: 0
        };

        // star box
        // modified from https://redstapler.co/space-warp-background-effect-three-js/
        let num_stars = 200;
        let starSize = 3;
        let lengthX = 45;
        let lengthY = 50;
        let lengthZ = 400;
        this.lengthZ = lengthZ;
        // let offset = 20;
        if (mobile) {
            lengthX = 30;
            lengthY = 30;
            this.lengthZ = 200;
            starSize = 2;
            // num_stars = 100;
        }

        const minX = -lengthX / 2;
        const minY = -lengthY / 2;
        const minZ = -this.lengthZ;
        this.minZ = minZ;
        const geometry = this.geometry = new THREE.BufferGeometry();
        // const vertices = new Float32Array(num_stars * 3);
        let vertices = [];
        for (let i = 0; i < num_stars; i++) {
            let star = new THREE.Vector3(

                Math.random() * lengthX + minX,
                Math.random() * lengthY + minY,
                Math.random() * this.lengthZ + minZ,

            );
            vertices.push(star);
            // vertices[i] = (star.x, star.y, star.z);
            // vertices[i] = star;
        }

        geometry.setFromPoints(vertices);
        geometry.attributes.position.needsUpdate = true;

        let sprite = new THREE.TextureLoader().load(HEART);
        sprite.encoding = THREE.sRGBEncoding;
        let material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: starSize,
            transparent: true,
            map: sprite
        });
        const galaxy = this.galaxy = new THREE.Points(geometry, material);
        // stars.position.set(0, 0, -100);
        this.add(galaxy);

        // this.galaxy = galaxy;
        // this.geometry = geometry;
        this.acceleration = 0.01;
        this.velocity = new Array(num_stars).fill(0.0);
        // this.minZ = minZ;
        // this.lengthZ = lengthZ;

        // Add self to parent's update list
        parent.addToUpdateList(this);

    }

    update(timeStamp) {
        if (this.geometry) {
            if (this.state.animate) {
                this.acceleration += 0.0005;
                let array = this.geometry.attributes.position.array;
                for (let i = 0; i < array.length; i += 3) {
                    this.velocity[i / 3] += this.acceleration;
                    array[i + 2] += this.velocity[i / 3];
                    if (array[i + 2] >= this.minZ + this.lengthZ) {
                        array[i + 2] = this.minZ;
                        this.velocity[i / 3] = Math.random() * 5;
                    }
                }
                this.geometry.attributes.position.needsUpdate = true;
            }

            if (this.state.rotate) {
                this.galaxy.rotation.z += 0.02;
                // stars.rotation.y = 0.05 * Math.sin(timeStamp / 500);
                // stars.rotation.x = 0.05 * Math.sin(timeStamp / 500);
            }
        }


        TWEEN.update();
    }
}

export default Galaxy;