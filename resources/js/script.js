function animate() {
	myMove0();
	myMove1();
	myMove2();
	myMove3();
	myMove4();
	myMove5();
	
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
const speed = 10;
const tooltipLeft = "175%";
const tooltipRight = "-155%";

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
