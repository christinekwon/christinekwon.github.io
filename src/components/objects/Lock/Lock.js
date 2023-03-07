import * as THREE from "three";
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import MODEL from './lock.obj';

class Lock extends THREE.Group {
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

        this.collector = [];

        const pink = 0xff85ba;

        this.material = material.clone();
        this.material.color.setHex(pink);
        this.material.sheen = 0;
        const scale = 10;
        new OBJLoader().load(MODEL, obj => {
            let heart = obj.children[0];
            let gori = obj.children[1];

            // mesh = obj.children[0];
            heart.scale.set(scale, scale, scale);
            gori.scale.set(scale, scale, scale);
            // obj.rotation.set(Math.PI / 2, Math.PI / 2, 0);
            heart.rotation.set(0, 0, 0);
            gori.rotation.set(0, 0, 0);

            heart.position.set(0, 0, 5);
            gori.position.set(0, 0, 5);

            heart.material = this.material;
            gori.material = this.material;


            // if (mobile) {
            //     obj.children[0].material = mobile_accent_material;
            //     obj.children[1].material = mobile_accent_material;
            // } else {
            //     obj.children[0].material = accent_material;
            //     obj.children[1].material = accent_material;
            // }


            // console.log(this);


            const pivot = new THREE.Group();
            gori.position.set(-1.8, 0, 0);
            pivot.position.set(1.8, 0, 5);
            pivot.rotation.set(0, 0, 0);
            pivot.add(gori);
            this.add(pivot)
            this.pivot = pivot;


            const speed = 1000;
            const delay = 1000;
            this.lift = new TWEEN.Tween(gori.position)
                .to({ x: gori.position, y: gori.position.y + 2.5, z: gori.position.z }, speed)
                .easing(TWEEN.Easing.Quadratic.In)
                // .delay(delay)
                // .start()
                .onComplete(() => {
                    new TWEEN.Tween(pivot.rotation)
                        .to({ x: pivot.rotation.x, y: Math.PI, z: pivot.rotation.z }, speed)
                        .easing(TWEEN.Easing.Quadratic.In)
                        .start()
                });

            const scale_out = scale * 1.05;
            const pulse_speed = 400;
            this.pulse_out = new TWEEN.Tween(heart.scale)
                .to({ x: scale_out, y: scale_out, z: scale_out }, pulse_speed)
                // .delay(2000)
                // .easing(TWEEN.Easing.Quadratic.In)
            this.pulse_in = new TWEEN.Tween(heart.scale)
                .to({ x: scale, y: scale, z: scale }, pulse_speed)
                // .easing(TWEEN.Easing.Quadratic.Out)

            this.pulse_out.chain(this.pulse_in);
            this.pulse_in.chain(this.pulse_out);

            setTimeout(() => {
                this.pulse_out.start();
            }, 2000);

            this.add(heart);
            parent.mesh = heart;
            this.collector.push(heart.geometry, gori.geometry);

        });


        this.collector.push(this.material);

        parent.lock = this;

        // Add self to parent's update list
        parent.addToUpdateList(this);

        // this.change_material_color.bind(this);
        this.unlock.bind(this);
        this.stop_pulse.bind(this);
        this.dispose.bind(this);
    }

    dispose() {
        for (let item of this.collector) {
            item.dispose();
        }
    }

    stop_pulse() {
        this.pulse_out.stop();
        this.pulse_in.stop();
    }


    unlock() {
        this.lift.start();
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

        TWEEN.update();
    }
}

export default Lock;