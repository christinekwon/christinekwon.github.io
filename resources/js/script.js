function animate() {
	cs_animate();
	cd_animate();
	design_animate();
	
	// phone, then computer
	setTimeout(animatePhone, 2000);
	setTimeout(type, 5000);

	// computer, then phone	
	// setTimeout(type, 2000);
	// setTimeout(animatePhone, 15000);
}

const backgroundColor = "rgba(255, 225, 236, 0.8)";
// const backgroundColor = "transparent";
// const backgroundColor = "rgba(128, 255, 249, 0.78)"
const padding = "10px 0px";
const borderRadius = "5px";
const bottomPadding = 180;
const rightPadding = 125;
// 10 is fast enough, 40 is slow enough
const speed = 20;
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

// junior iw
const cs_link6 = "pages/iw.html";

// l-system
const cd_link0 = "pages/l-system.html";

// shape grammar
const cd_link1 = "pages/shape-grammar.html";

// cellular automata
const cd_link2 = "pages/cellular-automata.html";

// hackprinceton
const design_link0 = "pages/hackprinceton.html";

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
