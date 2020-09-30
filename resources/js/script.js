function start() {
	animate();
	
	// phone, then computer
	setTimeout(animatePhone, 2000);
	setTimeout(type, 5000);
	

	// var titles = document.getElementsByClassName("project-names");
	// for (let i = 0; i < titles.length; i++) {
	// 	document.getElementsByClassName("project-names")[i].innerHTML = "a project ~";
	// }

	// computer, then phone	
	// setTimeout(type, 2000);
	// setTimeout(animatePhone, 15000);
}

$(window).on("load",function(){
	$(".loader-wrapper").fadeOut("slow");
});

// const backgroundColor0 = "rgba(255, 225, 236, 0.3)";
// const backgroundColor1 = "rgba(255, 225, 236, 0.8)";

const backgroundColor0 = "rgba(255, 226, 211, 0.3)";
const backgroundColor1 = "rgb(255, 226, 211, 0.8)";


// const backgroundColor = "transparent";
// const backgroundColor = "rgba(128, 255, 249, 0.78)"
const padding = "10px 0px";
const borderRadius = "5px";
const bottomPadding = 150;
const rightPadding = 125;
// 10 is fast enough, 40 is slow enough
const speed = 40;
const tooltipLeft = "175%";
const tooltipRight = "-155%";

// ttr
const cs_link0 = "https://belle-chang.github.io/type-type-revenge";

// tokitalk
const cs_link1 = "pages/tokitalk.html";

// cloth simulation
const cs_link2 = "cloth-sim";

//tigerride
const cs_link3 = "pages/tigerride.html";

// bluetooth app
const cs_link4 = "pages/bluetooth.html";

// raytracer
const cs_link5 = "raytracer";

// baby piano
const cs_link6 = "baby-piano";

// rhythm cooker
const cs_link7 = "rhythm-cooker";

// rhythm cooker
const cs_link8 = "dress-my-octopus";

// junior iw

// l-system
const cd_link0 = "pages/cd.html";

// shape grammar
const cd_link1 = "pages/shape-grammar.html";

// cellular automata
const cd_link2 = "pages/cellular-automata.html";

// hackprinceton
// const design_link0 = "pages/hackprinceton.html";
const design_link0 = "pages/graphic-design.html";

// illustrations
const design_link1 = "pages/designs.html";

// posters
const design_link2 = "pages/posters.html";

function randomX() {
	let min = 0;
	let max = window.innerWidth - 160;
	return (Math.random() * max) + min;
}
function randomY() {
	let min = 0;
	let max = window.innerHeight - 160;
	return (Math.random() * max) + min;
}

function aboutMe() {
	location.href = "pages/me.html";
}

function tuxedo() {
	location.href = "https://gagosian.com/quarterly/2019/01/25/essay-jean-michel-basquiat-black-and-white/";
}

function haring() {
	location.href = "https://www.haring.com/!/art-work/777";
}
