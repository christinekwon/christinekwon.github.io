import { Group, PointLight, AmbientLight } from 'three';

class Lights extends Group {
    constructor(...args) {
        // Invoke parent Group() constructor with our args
        super(...args);

        this.add(new AmbientLight(0x222222));

        const pointLight1 = new PointLight(0xffffff);
        pointLight1.position.set(150, 10, 0);
        pointLight1.castShadow = false;
        this.add(pointLight1);

        const pointLight2 = new PointLight(0xffffff);
        pointLight2.position.set(-150, 0, 0);
        this.add(pointLight2);

        const pointLight3 = new PointLight(0xffffff);
        pointLight3.position.set(0, -10, -150);
        this.add(pointLight3);

        // const pointLight4 = new PointLight(0xff0000);
        // pointLight4.position.set(0, 0, 150);
        // this.add(pointLight4);

        // const pointLight4 = new PointLight(0xff0000);
        // pointLight4.position.set(0, -80, 150);
        // this.add(pointLight4);
        // const pointLight5 = new PointLight(0xff0000);
        // pointLight5.position.set(0, 80, 150);
        // this.add(pointLight5);

    }
}

export default Lights;