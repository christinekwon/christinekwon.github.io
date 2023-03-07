import * as THREE from "three";
import { Lock } from 'objects';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';

class Frame extends THREE.Group {
    constructor(parent, mobile, material) {
        // Call parent Group() constructor
        super();

        // Init state
        this.state = {
            // gui: parent.state.gui,
            bob: true,
            spin: this.spin.bind(this),
            twirl: 0,
            blow: false,
        };

        this.mobile = mobile;
        this.base_material = new THREE.MeshBasicMaterial({
            color: 0x000000
        })

        this.torii = [];

        this.collector = [];

        this.material = material;


        // orig both 30
        let yPos = window.innerHeight / 30;
        const xPos = window.innerWidth / 30;
        const width = xPos * 2.5;
        const height = yPos * 2.5;
        const radius = 2;
        const segments = 3;
        // radiustop, bottom, height, radialsegments 
        // const horiz = new THREE.CylinderGeometry(radius, radius, width, segments);
        // const top = new THREE.Mesh(horiz, material);
        // top.rotateZ(Math.PI / 2)
        // top.position.set(0, yPos, 0)
        // this.add(top);

        // const bottom = new THREE.Mesh(horiz, material);
        // bottom.rotateZ(Math.PI / 2)
        // bottom.position.set(0, -yPos, 0)
        // this.add(bottom);

        // const vertical = new THREE.CylinderGeometry(radius, radius, height, segments);
        // const left = new THREE.Mesh(vertical, material);
        // left.position.set(-xPos, 0, 0)
        // this.add(left);

        // const right = new THREE.Mesh(vertical, material);
        // right.position.set(xPos, 0, 0)
        // this.add(right);

        // scale=10;
        // new OBJLoader().load(MODEL, obj => {
        //     let heart = obj.children[0];

        //     // mesh = obj.children[0];
        //     heart.scale.set(scale, scale, scale);
        //     heart.rotation.set(0, 0, 0);

        //     heart.position.set(0, 0, 5);

        //     heart.material = material;
        //     this.add(heart);
        // });

        let door_width = 30;
        if (mobile) {
            door_width = 17;
            yPos /= 2
        }

        const left_door = this.create_door(door_width, yPos * 2, [-door_width / 2, 0, 0], null);
        this.add(left_door);


        const right_door = this.create_door(door_width, yPos * 2, [door_width / 2, 0, 0], new Lock(parent, mobile, material));
        this.add(right_door);

        this.left_door = left_door;
        this.right_door = right_door;

        const open_delay = 3000;

        const speed = 5000;

        this.open_left = new TWEEN.Tween(this.left_door.rotation)
            .to({ x: 0, y: -3 * Math.PI / 4, z: 0 }, speed)
            // .easing(TWEEN.Easing.Quadratic.In)
            // .onStart(() => {
            //     console.log(this.right_door)
            //     new TWEEN.Tween(this.right_door.rotation)
            //         .to({ x: 0, y: Math.PI, z: 0 }, 3000)
            //         .easing(TWEEN.Easing.Quadratic.In)
            // }).start()


        this.open_right = new TWEEN.Tween(this.right_door.rotation)
            .to({ x: 0, y: 3 * Math.PI / 4, z: 0 }, speed)
            // .easing(TWEEN.Easing.Quadratic.In)


        // open_left.start();
        // open_right.start();


        // Add self to parent's update list
        parent.addToUpdateList(this);
        parent.doors = this;
        // this.change_material_color.bind(this);
        this.open.bind(this);
        this.dispose.bind(this);
    }

    dispose() {
        for (let item of this.collector) {
            item.dispose();
        }
    }

    open(delay) {
        this.open_left.delay(delay).start();
        this.open_right.delay(delay).start();
    }

    create_door(width, height, position, lock) {

        const group = new THREE.Group();
        const baseGeo = new THREE.BoxGeometry(width, height, 4);
        const baseMesh = new THREE.Mesh(baseGeo, this.base_material);
        // baseMesh.material.color.setHex(0x000000);
        // baseMesh.position.set(position[0], position[1], position[2]);
        group.add(baseMesh);

        const padding = 3;

        const outer_radius = 1;
        const inner_radius = 0.3;
        const segments = 4;
        // for antialiasing effect
        const inset = 3;
        const error = 0.1;

        const x = width / 2;
        const y = height / 2;

        // radiustop, bottom, height, radialsegments 
        const horiz_outer = new THREE.CylinderGeometry(outer_radius, outer_radius, width + outer_radius * 2, segments);
        const top_outer = new THREE.Mesh(horiz_outer, this.material);
        top_outer.rotateZ(Math.PI / 2)
        top_outer.position.set(0, y, inset)
        group.add(top_outer);

        const bottom_outer = new THREE.Mesh(horiz_outer, this.material);
        bottom_outer.rotateZ(Math.PI / 2)
        bottom_outer.position.set(0, -y, inset)
        group.add(bottom_outer);

        const horiz_inner = new THREE.CylinderGeometry(inner_radius, inner_radius, width - error, segments);

        const top_inner = new THREE.Mesh(horiz_inner, this.material);
        top_inner.rotateZ(Math.PI / 2)
        top_inner.position.set(0, y - padding, inset)
        group.add(top_inner);

        const bottom_inner = new THREE.Mesh(horiz_inner, this.material);
        bottom_inner.rotateZ(Math.PI / 2)
        bottom_inner.position.set(0, -y + padding, inset)
        group.add(bottom_inner);

        // vertical columns

        const vertical_outer = new THREE.CylinderGeometry(outer_radius, outer_radius, height + outer_radius * 2, segments);
        const left_outer = new THREE.Mesh(vertical_outer, this.material);
        left_outer.position.set(-x, 0, inset)
        group.add(left_outer);

        const right_outer = new THREE.Mesh(vertical_outer, this.material);
        right_outer.position.set(x, 0, inset);
        group.add(right_outer);

        const vertical_inner = new THREE.CylinderGeometry(inner_radius, inner_radius, height - error, segments);
        const left_inner = new THREE.Mesh(vertical_inner, this.material);
        left_inner.position.set(-x + padding, 0, inset)
        group.add(left_inner);

        const right_inner = new THREE.Mesh(vertical_inner, this.material);
        right_inner.position.set(x - padding, 0, inset);
        group.add(right_inner);

        const little_positioner = padding * 1.75;
        const little_length = little_positioner + inner_radius * 2;

        const little = new THREE.CylinderGeometry(inner_radius, inner_radius, little_length, segments);
        const little_vertical = new THREE.Mesh(little, this.material);
        const little_horizontal = little_vertical.clone();
        little_vertical.position.set(-x + little_positioner, y - little_positioner / 2, inset)
        little_horizontal.position.set(-x + little_positioner / 2, y - little_positioner, inset)
        little_horizontal.rotateZ(Math.PI / 2);
        const little_group_nw = new THREE.Group();
        little_group_nw.position.set(0, 0, 0)
        little_group_nw.add(little_horizontal, little_vertical);

        const little_group_ne = little_group_nw.clone();
        little_group_ne.scale.multiply(new THREE.Vector3(-1, 1, 1))
        const little_group_se = little_group_nw.clone();
        little_group_se.scale.multiply(new THREE.Vector3(-1, -1, 1))
        const little_group_sw = little_group_nw.clone();
        little_group_sw.scale.multiply(new THREE.Vector3(1, -1, 1))


        group.add(little_group_nw, little_group_ne, little_group_se, little_group_sw);


        // add mesh to garbage collector
        // this.collector.push(baseMesh, top_outer, top_inner, bottom_outer, bottom_inner, left_outer, left_inner, right_outer, right_inner);
        // this.collector.push(little_vertical, little_horizontal);

        // add torus knots
        // float forward/back, spin

        const torus_padding = width / 2;
        const torus_x = x - torus_padding;
        const torus_y = y - torus_padding;

        let torus_radius = 2;
        if (this.mobile) {
            torus_radius = 1;
        }
        // radius_torus radius_tube tubularSegments tubularSegments radialSegments
        const torusKnotGeometry = new THREE.TorusKnotGeometry(torus_radius, torus_radius / 2, 64, 16);
        const torus_nw = new THREE.Mesh(torusKnotGeometry, this.material)
        torus_nw.position.set(-torus_x, torus_y, 0);

        const torus_nw1 = torus_nw.clone().rotateZ(Math.PI);

        // const torus_ne = torus_nw.clone();
        // torus_ne.position.set(torus_x, torus_y, 0);

        // const torus_ne1 = torus_ne.clone().rotateZ(Math.PI);

        // const torus_se = torus_nw.clone();
        // torus_se.position.set(torus_x, -torus_y, 0);

        // const torus_se1 = torus_se.clone().rotateZ(Math.PI);

        const torus_sw = torus_nw.clone();
        torus_sw.position.set(-torus_x, -torus_y, 0);

        const torus_sw1 = torus_sw.clone().rotateZ(Math.PI);

        // const torus_big = torus_nw.clone();
        // torus_big.position.set(0, 0, 0);
        // torus_big.scale.multiplyScalar(3);

        // const torus_big1 = torus_big.clone().rotateZ(Math.PI);

        const torus_group = new THREE.Group();
        torus_group.add(torus_nw, torus_sw);
        torus_group.add(torus_nw1, torus_sw1);
        // if (this.mobile) {
        //     torus_group.add(torus_nw, torus_sw);
        //     torus_group.add(torus_nw1, torus_sw1);
        // } else {
        //     torus_group.add(torus_nw, torus_ne, torus_se, torus_sw);
        //     torus_group.add(torus_nw1, torus_ne1, torus_se1, torus_sw1);
        // }
        // torus_group.add(torus_big, torus_big1)
        torus_group.position.set(0, 0, 2)
        this.torii.push(torus_group);

        let heart_scale = 15;
        let lockX = 13;
        let lock_scale = 0.5;
        let lockZ = 0;
        if (this.mobile) {
            heart_scale /= 2;
            lock_scale = 0.3;
            lockX = 9.5;
            lockZ = 1.5;
        }

        group.add(torus_group);
        if (lock) {
            // if (position[0] > 0) {
            //     lock.position.set(-lockX, 0, lockZ)
            // } else {
            //     lock.position.set(lockX, 0, lockZ)
            // }
            if (this.mobile) {
                lock.position.set(-width / 2, -5, -2.5)
                lock.scale.multiplyScalar(1.25);
            } else {
                lock.position.set(-width / 2, -5, -2.5)
                lock.scale.multiplyScalar(1.25);
            }

            // lock.scale.multiplyScalar(lock_scale);
            group.add(lock);
            this.collector.push(lock);
        }


        // new OBJLoader().load(MODEL, obj => {
        //     let heart = obj.children[0];

        //     // mesh = obj.children[0];
        //     heart.scale.set(heart_scale, heart_scale, heart_scale);
        //     heart.rotation.set(0, 0, 0);

        //     heart.position.set(0, 0, 5);

        //     heart.material = this.material;
        //     group.add(heart);
        // });

        // add hooks for lock
        // ring radius, tube radius, radialsegments, tubularsegments, arc
        const torusGeometry = new THREE.TorusGeometry(1.3, 0.5, 16, 64);
        const torus = new THREE.Mesh(torusGeometry, this.material);
        torus.rotateX(Math.PI / 2)
        const ringZ = 4;
        // torus.rotateZ(-Math.PI / 4)
        if (this.mobile) {
            if (position[0] > 0) {
                torus.position.set(-6.25, 0, ringZ)
            } else {
                torus.position.set(6.25, 0, ringZ)
            }
        } else {
            if (position[0] > 0) {
                torus.position.set(-12.7, 0, ringZ)
            } else {
                torus.position.set(12.7, 0, ringZ)
            }
        }

        group.add(torus);


        group.position.set(-position[0], position[1], position[2]);


        const pivot = new THREE.Group();
        pivot.position.set(position[0] * 2, position[1], position[2]);
        pivot.add(group);

        // add geometries to garbage collector
        this.collector.push(baseGeo, horiz_inner, horiz_outer, vertical_inner, vertical_outer, little);
        this.collector.push(torusKnotGeometry, torusGeometry);

        return pivot;


    }

    spin() {
        // Add a simple twirl
        this.state.twirl += 6 * Math.PI;

        // Use timing library for more precice "bounce" animation
        // TweenJS guide: http://learningthreejs.com/blog/2011/08/17/tweenjs-for-smooth-animation/
        // Possible easings: http://sole.github.io/tween.js/examples/03_graphs.html
        const jumpUp = new TWEEN.Tween(this.position)
            .to({ y: this.position.y + 1 }, 300)
            .easing(TWEEN.Easing.Quadratic.Out);
        const fallDown = new TWEEN.Tween(this.position)
            .to({ y: 0 }, 300)
            .easing(TWEEN.Easing.Quadratic.In);

        // Fall down after jumping up
        jumpUp.onComplete(() => fallDown.start());

        // Start animation
        jumpUp.start();
    }

    update(timeStamp) {
        if (this.state.bob) {
            // Bob back and forth
            // this.rotation.z = 0.05 * Math.sin(timeStamp / 300);
        }

        if (this.torii.length > 0) {
            for (let torus_group of this.torii) {
                for (let torus of torus_group.children) {
                    torus.rotation.z -= 0.005;
                    // torus.rotation.z += 0.03;
                }
                torus_group.position.z = 1.5 + 0.5 * Math.sin(timeStamp / 500);
            }
        }

        // if (this.left_door) {

        //     this.left_door.rotateY(-Math.PI / 160);
        // }
        // if (this.right_door) {
        //     this.right_door.rotateY(+Math.PI / 160);
        // }


        // if (this.obj) {
        //     this.obj.rotateY(Math.PI / 48);
        // }

        // if (this.obj) {
        //     let date = new Date();
        //     let scale = date.getSeconds();
        //     const grow = new TWEEN.Tween(this.scale)
        //         .to({ x: scale, y: scale, z: scale }, 1)
        //         // .easing(TWEEN.Easing.Quadratic.In);
        //         // this.obj.scale.set(scale, scale, scale);
        //     grow.start();
        // }


        // if (this.state.twirl > 0) {
        //     // Lazy implementation of twirl
        //     this.state.twirl -= Math.PI / 8;
        //     this.rotation.y += Math.PI / 8;
        // }
        // this.rotation.y += Math.PI / 48;
        // Advance tween animations, if any exist
        TWEEN.update();
    }
}

export default Frame;