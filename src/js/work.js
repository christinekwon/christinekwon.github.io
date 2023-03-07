import '../css/base.css';
import '../css/work.css';
import '../css/header.css';
import '../css/border-images.css';
import FLOWER from '../images/flower.png';
import DATA_2D from "../data/2D.json";
import DATA_3D from "../data/3D.json";
import DATA_CS from "../data/CS.json";
import DATA_GD from "../data/GD.json";
import { isMobileDevice } from '../js/mobile.js';
import '../js/loader.js';
import '../js/header.js';



function importAll(r) {
    let cache = r.keys().map(r);
    return Object.entries(cache).map(module => module[1].default);
}

const IMAGES = importAll(
    require.context("../thumbnails/", true, /\.(png|jpe?g|svg|mp4)$/)
);

const corner = document.getElementsByClassName('corner');
for (let c of corner) {
    c.src = FLOWER;
}

var data = {};

var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
const button_height = document.querySelector(".outer-accordion").offsetHeight / 2.0;

// root is html file
const data_root = "../data/"
var files = [data_root + "3D.json", data_root + "2D.json", data_root + "CS.json", data_root + "GD.json"]
var files = [DATA_2D, DATA_3D, DATA_CS, DATA_GD]
const num_files = files.length;

const quick_fold_time = 1;
const default_fold_time = 1;

const base_url = "../thumbnails/"

read_files();

function read_files() {
    const promises = [];
    for (let i = 0; i < num_files; i++) {
        promises.push(fetch(files[i]).then(value => value.json()))
    }

    // read json file
    Promise.all(promises)
        .then((json_data) => {
            for (let set of json_data) {
                data = {...data, ...set };
            }
            for (let key in data) {
                mod_inner_panel(key, data[key]);
            }
            for (let i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", accordion);
            }
            let time;
            for (let p of panels) {
                // geq 1 but leq 10
                time = Math.max(1, Math.min(5, Math.floor(p.scrollHeight / button_height)));
                p.style.transition = "max-height " + time + "s ease";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function accordion(e) {
    e.target.classList.toggle("active");
    var panel = e.target.nextElementSibling;
    fold_inactive_panels(e.target, panel)
    if (panel) {
        // close open panel
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            for (let child of panel.children) {
                const classList = child.classList;
                // deactivate any accordion buttons
                if (classList.contains('accordion')) {
                    classList.remove("active");
                }
                // collapse any open child panels
                if (classList.contains('panel')) {
                    child.style.maxHeight = null;
                }
            }
            panel.style.transition = "max-height " + quick_fold_time + "s ease";

        }
        // open a panel
        else {


            // e.target.scrollIntoView({ behavior: 'smooth', top: 0 });
            let time;
            // squeeze btwn 2-5 secs
            time = Math.max(1.0, Math.min(5.0, panel.scrollHeight / button_height));
            panel.style.transition = "max-height " + time + "s ease";

            // open inner panel
            if (panel.classList.contains("inner-panel")) {
                panel.style.maxHeight = panel.scrollHeight * 3 + "px";
                // prevent from cutting off wierdly when panel.scrollHeight > parentElement.scrollHeight
                e.target.parentElement.style.maxHeight = Math.max(e.target.parentElement.scrollHeight + panel.scrollHeight, panel.scrollHeight * 3) + "px";
            }
            // open outer panel 
            else {
                panel.style.maxHeight = panel.scrollHeight * 3 + "px";
            }
            // setTimeout(() => {
            //     // const pos = $(e.target).offset().top;

            //     $("html").animate({ scrollTop: $(e.target).position().top }, 2000, "linear");
            // }, time * 10)
        }

    }
}

// once an accordion is selected, fold all other accordions
function fold_inactive_panels(active_accordion, active_panel) {
    // if inner accordion is selected, fold all other inner panels in the same accordion
    if (active_panel.classList.contains('inner-panel')) {
        fold_inactive_inner_accs(active_accordion.parentElement, active_accordion);
    }

    // if outer accordion is selected, fold all other outer accordions
    if (active_panel.classList.contains('outer-panel')) {
        const outer_accordions = document.getElementsByClassName('outer-accordion');
        for (let elem of outer_accordions) {
            if (elem.isEqualNode(active_accordion)) {
                continue;
            }

            // fold inactive outer accordions
            elem.classList.remove("active");
            elem.nextElementSibling.style.transition = "max-height " + quick_fold_time + "s ease";
            elem.nextElementSibling.style.maxHeight = null;

            // fold all inner accordions in inactive outer accordions
            fold_inactive_inner_accs(elem.nextElementSibling);
        }
    }

}

// given the currently focused panel and activated inner accordion, deactivate all other inner accs
function fold_inactive_inner_accs(active_outer_panel, active_inner_acc) {
    const children = active_outer_panel.children;

    let child;
    let i;
    for (i = 0; i < children.length; i++) {
        child = children[i];

        // sometimes this method is called w.o active_inner_acc arg just to close all inner panels
        if (active_inner_acc) {
            if (child.isEqualNode(active_inner_acc)) {
                i++; // skip next panel associated with this acc
                continue;
            }
        }

        const classList = child.classList;

        // deactivate any accordion buttons
        if (classList.contains('active')) {
            classList.remove("active");
        }
        // collapse any open child panels
        if (classList.contains('panel')) {
            child.style.maxHeight = null;
            // make it collapse quickly
            child.style.transition = "max-height " + quick_fold_time + "s ease";
        }

    }
    // active_outer_panel.style.transition = "max-height " + 0.5 + "s ease";
}

// type: 2D 3D GD CS

function mod_inner_panel(key, project) {

    // find outer wrapping elements
    const type = project["type"];
    const outer_accordion = document.getElementById(type);
    const outer_panel = outer_accordion.nextElementSibling;

    // init related accordion button
    const inner_accordion = document.createElement('div');
    inner_accordion.classList.add('accordion', 'inner-accordion');
    inner_accordion.innerHTML = project["title"];

    // attach new inner accordion to outer panel
    outer_panel.appendChild(inner_accordion);

    // init related inner panel
    const inner_panel = document.createElement('div');
    inner_panel.id = key;
    inner_panel.classList.add('panel', 'inner-panel');

    // if media is present, split inner panel into two
    const media = project["media"];
    let inner_left_panel;
    let inner_right_panel;
    if (media) {

        inner_right_panel = document.createElement('div');
        inner_left_panel = document.createElement('div');

        for (let item of media) {
            let type = item['type'];
            // import image from base_url + item['url'];
            // let url = base_url + item['url'];
            if (type == "image") {
                inner_right_panel.appendChild(get_img_block(item['url'].slice(3)));
            }

            if (type == "video") {
                inner_right_panel.appendChild(get_video_block(item['url'].slice(3)));
            }
        }

        inner_left_panel.classList.add('inner-left-panel', 'half-panel');
        inner_right_panel.classList.add('inner-right-panel', 'half-panel')

        inner_panel.appendChild(inner_left_panel);
        inner_panel.appendChild(inner_right_panel);

    } else {
        inner_panel.classList.add('text-only-panel');
        inner_panel.classList.add('active');
    }

    for (let d of project["description"]) {
        let block;
        if (d['type'] == 'img') {
            block = get_img_block(d['content']);
        }
        if (d['type'] == 'video') {
            // block = get_video_block(d['content']);
        }
        if (d['type'] == 'youtube') {
            block = get_youtube_block(d['content']);
        }
        if (d['type'] == 'link') {
            block = get_link_block(d['content']);
        } else if (d['type'] == 'text') {
            block = get_text_block(d['content']);
        }
        if (media) {
            inner_left_panel.appendChild(block);
        } else {
            inner_panel.appendChild(block);
        }
    }

    // date


    let tools = project["tools"];
    if (tools) {
        let tools_block = get_text_block("Tools: " + tools);
        if (media) {
            inner_left_panel.appendChild(tools_block);
        } else {
            inner_panel.appendChild(tools_block);
        }
    }

    const date = project['date'];
    const year = date.slice(0, 2);
    const month = date.slice(-2);
    const date_block = get_text_block("Date: " + month + ".20" + year);

    if (media) {
        inner_left_panel.appendChild(date_block);
    } else {
        inner_panel.appendChild(date_block);
    }
    outer_panel.appendChild(inner_panel);
}


function get_img_block(content) {
    const img_block = document.createElement('img');
    img_block.classList.add('image-block');
    img_block.classList.add('block');
    img_block.src = content;
    return img_block
}

function get_youtube_block(content) {
    const video_block = document.createElement('iframe');
    video_block.classList.add('video_block');
    video_block.classList.add('block');
    video_block.src = content;
    video_block.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video_block.frameBorder = "0";
    video_block.title = "YouTube video player";
    return video_block;
}

function get_video_block(content) {
    const video_block = document.createElement('video');
    let source = document.createElement('source');
    // https://muffinman.io/blog/hack-for-ios-safari-to-display-html-video-thumbnail/
    source.src = content + "#t=0.001";
    source.type = "video/mp4";
    if (isMobileDevice()) {
        video_block.controls = true;
        video_block.autoplay = false;
    } else {
        video_block.controls = false;
        video_block.autoplay = true;
    }

    video_block.muted = true;
    video_block.loop = true;
    video_block.classList.add('video-block');
    video_block.classList.add('block');
    video_block.src = content;
    // video_block.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video_block.appendChild(source);
    return video_block;
}

function get_link_block(content) {
    const link_block = document.createElement('a');
    link_block.classList.add('link-block');
    link_block.classList.add('block');
    link_block.href = content;
    link_block.target = "_blank";
    link_block.innerHTML = "link";
    return link_block;
}

function get_text_block(content) {
    const text_block = document.createElement('p');
    text_block.classList.add('text-block');
    text_block.classList.add('block');
    text_block.innerHTML = content;
    return text_block;
}