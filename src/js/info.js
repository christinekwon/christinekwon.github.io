import '../css/base.css';
import '../css/info.css';
import '../css/header.css';

import '../js/loader.js';
import '../js/header.js';
import ME from '../images/me1.jpg';


get_welcome_message();

function get_welcome_message() {
    const message = document.getElementById('message');
    const date = new Date();
    let hour = date.getHours();

    // &#10024; sparkle
    if (hour <= 4) {
        // &#128716;  &#128564; zzz sleeping
        message.innerHTML = "Hi night owl! &nbsp; &#127770; &#127773;";
    } else if (hour <= 7) {
        message.innerHTML = "Good morning, early bird! &nbsp; &#128019; &#129370;"
    } else if (hour <= 11) {
        message.innerHTML = "Good morning! &nbsp; &#9749; &nbsp; &#129360";
    } else if (hour <= 17) {
        message.innerHTML = "Good afternoon! &nbsp; &#128587; &#127774;";
    } else {
        message.innerHTML = "Good evening! &nbsp; &#127864; &#127769;"
    }
}

document.getElementById("me").src = ME;