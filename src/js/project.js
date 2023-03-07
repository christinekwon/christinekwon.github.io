import '../css/base.css';
import '../css/project.css';
import '../css/header.css';
import { isMobileDevice } from '../js/mobile.js';
import '../js/loader.js';
import '../js/header.js';

let mobile = isMobileDevice();

const videos = document.getElementsByTagName("video");

for (let video of videos) {
    if (mobile) {
        video.controls = true;
        video.autoplay = false;
    } else {
        video.controls = false;
        video.autoplay = true;
    }
}