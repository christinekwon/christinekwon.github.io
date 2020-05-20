function animate() {
	myMove0();
	myMove1();
	myMove2();
	myMove3();
	myMove4();
	myMove5();
	// computer, then phone	
	// setTimeout(type, 2000);
	// setTimeout(animatePhone, 15000);
	// phone, then computer
	setTimeout(animatePhone, 2000);
	setTimeout(type, 5000);
}

const backgroundColor = "rgba(255, 225, 236, 0.8)";
// const backgroundColor = "transparent";
// const backgroundColor = "rgba(128, 255, 249, 0.78)"
const padding = "10px 0px";
const borderRadius = "5px";
const bottomPadding = 180;
const rightPadding = 125;
// 10 is good
const speed = 40;
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

// ttr
function myMove0() {
	// console.log(document.getElementsByClassName("icon-container"));
	var elem = document.getElementById("myAnimation0");
	var xpos = randomX();// x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	// flag; true means circle is moving l --> r, false means r --> l
	var x_increasing = Math.random() >= 0.5; 
	// flag; true means circle is moving top -- > bottom, false means bottom --> top
	var y_increasing = Math.random() >= 0.5;
	
	// true = circle is stopped, false = circle is moving
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = "https://belle-chang.github.io/type-type-revenge";
	}
  
	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder0").src = "resources/images/folder-open.png";
		elem.style.backgroundColor = backgroundColor;
		elem.style.zIndex = "2";
		if (xpos > window.innerWidth / 2) {
			elem.children[2].style.left = tooltipRight;
		}
		else {
			elem.children[2].style.left = tooltipLeft;
		}
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		document.getElementById("folder0").src = "resources/images/folder-closed.png";
		elem.style.backgroundColor = "transparent";
		elem.style.zIndex = "1";
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, speed);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - bottomPadding) {
				y_increasing = false;
				ypos--;
				elem.style.top = ypos + 'px'; 
			}
			// when circle reaches top edge of window, bounce back
			else if (ypos <= 0) {
				y_increasing = true;
				ypos++;
				elem.style.top = ypos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its y position according to the y_increasing flag
			else {
				if (y_increasing) {
					ypos++;
					elem.style.top = ypos + 'px'; 
				}
				else {
					ypos--;
					elem.style.top = ypos + 'px'; 
				}
			}
	
			// when circle reaches right edge of window, bounce back
			if (xpos >= window.innerWidth - rightPadding) {
				x_increasing = false;
				xpos--;
				elem.style.left = xpos + 'px'; 
			}
			// when circle reaches left edge of window, bounce back
			else if (xpos <= 0) {
				x_increasing = true;
				xpos++; 
				elem.style.left = xpos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its x position according to the x_increasing flag
			else {
				if (x_increasing) {
					xpos++;
					elem.style.left = xpos + 'px'; 
				}
				else {
					xpos--;
					elem.style.left = xpos + 'px'; 
				}
			}
		}
	
	}
}

// tokitalk
function myMove1() {
	var elem = document.getElementById("myAnimation1");
	var xpos = randomX(); // x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	// flag; true means circle is moving l --> r, false means r --> l
	var x_increasing = Math.random() >= 0.5; 
	// flag; true means circle is moving top -- > bottom, false means bottom --> top
	var y_increasing = Math.random() >= 0.5; 
	
	// true = circle is stopped, false = circle is moving
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = name + '.html';
	}
  
	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder1").src = "resources/images/folder-open.png";
		elem.style.backgroundColor = backgroundColor;
		elem.style.zIndex = "2";
		if (xpos > window.innerWidth / 2) {
			elem.children[2].style.left = tooltipRight;
		}
		else {
			elem.children[2].style.left = tooltipLeft;
		}
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		document.getElementById("folder1").src = "resources/images/folder-closed.png";
		elem.style.backgroundColor = "transparent";
		elem.style.zIndex = "1";
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, speed);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - bottomPadding) {
				y_increasing = false;
				ypos--;
				elem.style.top = ypos + 'px'; 
			}
			// when circle reaches top edge of window, bounce back
			else if (ypos <= 0) {
				y_increasing = true;
				ypos++;
				elem.style.top = ypos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its y position according to the y_increasing flag
			else {
				if (y_increasing) {
					ypos++;
					elem.style.top = ypos + 'px'; 
				}
				else {
					ypos--;
					elem.style.top = ypos + 'px'; 
				}
			}
	
			// when circle reaches right edge of window, bounce back
			if (xpos >= window.innerWidth - rightPadding) {
				x_increasing = false;
				xpos--;
				elem.style.left = xpos + 'px'; 
			}
			// when circle reaches left edge of window, bounce back
			else if (xpos <= 0) {
				x_increasing = true;
				xpos++; 
				elem.style.left = xpos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its x position according to the x_increasing flag
			else {
				if (x_increasing) {
					xpos++;
					elem.style.left = xpos + 'px'; 
				}
				else {
					xpos--;
					elem.style.left = xpos + 'px'; 
				}
			}
		}
	
	}
}


// cloth-sim
function myMove2() {
	var elem = document.getElementById("myAnimation2");
	var xpos = randomX(); // x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	// flag; true means circle is moving l --> r, false means r --> l
	var x_increasing = Math.random() >= 0.5; 
	// flag; true means circle is moving top -- > bottom, false means bottom --> top
	var y_increasing = Math.random() >= 0.5; 
	
	// true = circle is stopped, false = circle is moving
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = 'cloth-sim';
	}

	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder2").src = "resources/images/folder-open.png";
		elem.style.backgroundColor = backgroundColor;
		elem.style.zIndex = "2";
		if (xpos > window.innerWidth / 2) {
			elem.children[2].style.left = tooltipRight;
		}
		else {
			elem.children[2].style.left = tooltipLeft;
		}
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		document.getElementById("folder2").src = "resources/images/folder-closed.png";
		elem.style.backgroundColor = "transparent";
		elem.style.zIndex = "1";		
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, speed);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - bottomPadding) {
				y_increasing = false;
				ypos--;
				elem.style.top = ypos + 'px'; 
			}
			// when circle reaches top edge of window, bounce back
			else if (ypos <= 0) {
				y_increasing = true;
				ypos++;
				elem.style.top = ypos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its y position according to the y_increasing flag
			else {
				if (y_increasing) {
					ypos++;
					elem.style.top = ypos + 'px'; 
				}
				else {
					ypos--;
					elem.style.top = ypos + 'px'; 
				}
			}
	
			// when circle reaches right edge of window, bounce back
			if (xpos >= window.innerWidth - rightPadding) {
				x_increasing = false;
				xpos--;
				elem.style.left = xpos + 'px'; 
			}
			// when circle reaches left edge of window, bounce back
			else if (xpos <= 0) {
				x_increasing = true;
				xpos++; 
				elem.style.left = xpos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its x position according to the x_increasing flag
			else {
				if (x_increasing) {
					xpos++;
					elem.style.left = xpos + 'px'; 
				}
				else {
					xpos--;
					elem.style.left = xpos + 'px'; 
				}
			}
		}
	
	}
}


// tigerride
function myMove3() {
	var elem = document.getElementById("myAnimation3");
	var xpos = randomX(); // x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	// flag; true means circle is moving l --> r, false means r --> l
	var x_increasing = Math.random() >= 0.5; 
	// flag; true means circle is moving top -- > bottom, false means bottom --> top
	var y_increasing = Math.random() >= 0.5; 
	
	// true = circle is stopped, false = circle is moving
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = name + '.html';
	}
  
	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder3").src = "resources/images/folder-open.png";
		elem.style.backgroundColor = backgroundColor;
		elem.style.zIndex = "2";
		if (xpos > window.innerWidth / 2) {
			elem.children[2].style.left = tooltipRight;
		}
		else {
			elem.children[2].style.left = tooltipLeft;
		}
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		document.getElementById("folder3").src = "resources/images/folder-closed.png";
		elem.style.backgroundColor = "transparent";
		elem.style.zIndex = "1";
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, speed);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - bottomPadding) {
				y_increasing = false;
				ypos--;
				elem.style.top = ypos + 'px'; 
			}
			// when circle reaches top edge of window, bounce back
			else if (ypos <= 0) {
				y_increasing = true;
				ypos++;
				elem.style.top = ypos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its y position according to the y_increasing flag
			else {
				if (y_increasing) {
					ypos++;
					elem.style.top = ypos + 'px'; 
				}
				else {
					ypos--;
					elem.style.top = ypos + 'px'; 
				}
			}
	
			// when circle reaches right edge of window, bounce back
			if (xpos >= window.innerWidth - rightPadding) {
				x_increasing = false;
				xpos--;
				elem.style.left = xpos + 'px'; 
			}
			// when circle reaches left edge of window, bounce back
			else if (xpos <= 0) {
				x_increasing = true;
				xpos++; 
				elem.style.left = xpos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its x position according to the x_increasing flag
			else {
				if (x_increasing) {
					xpos++;
					elem.style.left = xpos + 'px'; 
				}
				else {
					xpos--;
					elem.style.left = xpos + 'px'; 
				}
			}
		}
	
	}
}


// bluetooth
function myMove4() {
	var elem = document.getElementById("myAnimation4");
	var xpos = randomX(); // x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	// flag; true means circle is moving l --> r, false means r --> l
	var x_increasing = Math.random() >= 0.5; 
	// flag; true means circle is moving top -- > bottom, false means bottom --> top
	var y_increasing = Math.random() >= 0.5; 
	
	// true = circle is stopped, false = circle is moving
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = name + '.html';
	}
  
	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder4").src = "resources/images/folder-open.png";
		elem.style.backgroundColor = backgroundColor;
		elem.style.zIndex = "2";
		if (xpos > window.innerWidth / 2) {
			elem.children[2].style.left = tooltipRight;
		}
		else {
			elem.children[2].style.left = tooltipLeft;
		}
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		document.getElementById("folder4").src = "resources/images/folder-closed.png";
		elem.style.backgroundColor = "transparent";
		elem.style.zIndex = "1";		
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, speed);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - bottomPadding) {
				y_increasing = false;
				ypos--;
				elem.style.top = ypos + 'px'; 
			}
			// when circle reaches top edge of window, bounce back
			else if (ypos <= 0) {
				y_increasing = true;
				ypos++;
				elem.style.top = ypos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its y position according to the y_increasing flag
			else {
				if (y_increasing) {
					ypos++;
					elem.style.top = ypos + 'px'; 
				}
				else {
					ypos--;
					elem.style.top = ypos + 'px'; 
				}
			}
	
			// when circle reaches right edge of window, bounce back
			if (xpos >= window.innerWidth - rightPadding) {
				x_increasing = false;
				xpos--;
				elem.style.left = xpos + 'px'; 
			}
			// when circle reaches left edge of window, bounce back
			else if (xpos <= 0) {
				x_increasing = true;
				xpos++; 
				elem.style.left = xpos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its x position according to the x_increasing flag
			else {
				if (x_increasing) {
					xpos++;
					elem.style.left = xpos + 'px'; 
				}
				else {
					xpos--;
					elem.style.left = xpos + 'px'; 
				}
			}
		}
	
	}
}

// raytracer
function myMove5() {
	var elem = document.getElementById("myAnimation5");
	var xpos = randomX(); // x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	// flag; true means circle is moving l --> r, false means r --> l
	var x_increasing = Math.random() >= 0.5; 
	// flag; true means circle is moving top -- > bottom, false means bottom --> top
	var y_increasing = Math.random() >= 0.5; 
	
	// true = circle is stopped, false = circle is moving
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = 'raytracer';
	}
  
	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder5").src = "resources/images/folder-open.png";
		elem.style.backgroundColor = backgroundColor;
		elem.style.zIndex = "2";
		if (xpos > window.innerWidth / 2) {
			elem.children[2].style.left = tooltipRight;
		}
		else {
			elem.children[2].style.left = tooltipLeft;
		}
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		document.getElementById("folder5").src = "resources/images/folder-closed.png";
		elem.style.backgroundColor = "transparent";
		elem.style.zIndex = "1";		
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, speed);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - bottomPadding) {
				y_increasing = false;
				ypos--;
				elem.style.top = ypos + 'px'; 
			}
			// when circle reaches top edge of window, bounce back
			else if (ypos <= 0) {
				y_increasing = true;
				ypos++;
				elem.style.top = ypos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its y position according to the y_increasing flag
			else {
				if (y_increasing) {
					ypos++;
					elem.style.top = ypos + 'px'; 
				}
				else {
					ypos--;
					elem.style.top = ypos + 'px'; 
				}
			}
	
			// when circle reaches right edge of window, bounce back
			if (xpos >= window.innerWidth - rightPadding) {
				x_increasing = false;
				xpos--;
				elem.style.left = xpos + 'px'; 
			}
			// when circle reaches left edge of window, bounce back
			else if (xpos <= 0) {
				x_increasing = true;
				xpos++; 
				elem.style.left = xpos + 'px'; 
			}
			// if circle is floating in the middle of the screen, increment
			// its x position according to the x_increasing flag
			else {
				if (x_increasing) {
					xpos++;
					elem.style.left = xpos + 'px'; 
				}
				else {
					xpos--;
					elem.style.left = xpos + 'px'; 
				}
			}
		}
	
	}
}