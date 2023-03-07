import { Group, Color, PointLight, Vector3, CatmullRomCurve3 } from 'three';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';

class MovingLight extends Group {
    constructor(parent) {
        // Invoke parent Group() constructor with our args
        super();

        const max = 50;
        var spline = this.spline = new CatmullRomCurve3([

            // new THREE.Vector3(-max, -max, 0),
            // new THREE.Vector3(max, max, 0),
            // new THREE.Vector3(-max, -max, 0),

            new Vector3(-max, -max, 0),
            new Vector3(max, max, 0),
            new Vector3(0, 0, -max * 2),
            new Vector3(-max, -max, 0),

            // new THREE.Vector3(-20, -20, 0),

            // new THREE.Vector3(-10, 0, 0),
            // new THREE.Vector3(0, 10, 0),
            // new THREE.Vector3(10, 0, 0),
            // new THREE.Vector3(0, -10, 0),
            // new THREE.Vector3(-10, 0, 0),


            // new THREE.Vector3(0, 20, -100),
            // new THREE.Vector3(20, 20, -100),
            // new THREE.Vector3(40, 20, 100),
            // new THREE.Vector3(70, 20, 10),
            // new THREE.Vector3(100, 20, 30),
            // new THREE.Vector3(-100, 20, 100)
        ]);

        // var geometry = new THREE.BufferGeometry().setFromPoints(spline.getPoints(50));
        // var lineMaterial = new THREE.LineBasicMaterial({
        //     color: 0xffffff,
        // });
        // // geometry.vertices = splinePoints;
        // var line = new THREE.Line(geometry, lineMaterial);
        // scene.add(line);

        var pointLight = this.pointLight = new PointLight();
        // pointLight.position.set(10, 0, 0)
        // pointLight.color = new THREE.Color(0xff00b3);
        pointLight.color = new Color(0xff0000);
        pointLight.intensity = 1000; //red
        pointLight.distance = 500;
        pointLight.name = 'pointLight';
        this.add(pointLight);
        // this.pointLight = pointLight;

        const heartDist = 20;
        const zDist = 8;
        var heartLight = new PointLight();
        heartLight.color = new Color(0xff0000);
        heartLight.intensity = 100;
        heartLight.distance = 100;
        heartLight.position.set(-heartDist * 4, -70, zDist)
        this.add(heartLight);
        this.heartLight = heartLight;

        this.move_heart_light = new TWEEN.Tween(heartLight.position)
            .to({ x: heartDist, y: 20, z: zDist }, 1000)
            // .delay(500)
            .easing(TWEEN.Easing.Quadratic.Out)



        this.pos = 0;

        this.move = 1;
        this.shine_heart_light.bind(this);
        parent.addToUpdateList(this);
    }

    shine_heart_light() {
        console.log('stop')
        this.move = 0;
        // this.add(this.heartLight);
        this.move_heart_light.start();
    }

    update(timeStamp) {
        if (this.pointLight && this.move) {
            if (this.pos <= 1) {
                this.pointLight.position.set(this.spline.getPointAt(this.pos).x, this.spline.getPointAt(this.pos).y, this.spline.getPointAt(this.pos).z);
                this.pos += 0.002 //red
                    // pos += 0.001
            } else {
                this.pos = 0;
            }
        }
    }
}

export default MovingLight;