function cs_animate() {
    csMove0();
	csMove1();
	csMove2();
	csMove3();
	csMove4();
	csMove5();
}

// ttr
function csMove0() {
	// console.log(document.getElementsByClassName("icon-container"));
	var elem = document.getElementById("csAnimation0");
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
		location.href = cs_link0;
	}
  
	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder0").src = "resources/images/home/folder-open.png";
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
		document.getElementById("folder0").src = "resources/images/home/folder-closed.png";
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
function csMove1() {
	var elem = document.getElementById("csAnimation1");
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
		location.href = cs_link1;
	}
  
	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder1").src = "resources/images/home/folder-open.png";
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
		document.getElementById("folder1").src = "resources/images/home/folder-closed.png";
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
function csMove2() {
	var elem = document.getElementById("csAnimation2");
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
		location.href = cs_link2;
	}

	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder2").src = "resources/images/home/folder-open.png";
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
		document.getElementById("folder2").src = "resources/images/home/folder-closed.png";
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
function csMove3() {
	var elem = document.getElementById("csAnimation3");
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
		location.href = cs_link3;
	}
  
	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder3").src = "resources/images/home/folder-open.png";
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
		document.getElementById("folder3").src = "resources/images/home/folder-closed.png";
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
function csMove4() {
	var elem = document.getElementById("csAnimation4");
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
		location.href = cs_link4;
	}
  
	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder4").src = "resources/images/home/folder-open.png";
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
		document.getElementById("folder4").src = "resources/images/home/folder-closed.png";
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
function csMove5() {
	var elem = document.getElementById("csAnimation5");
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
		location.href = cs_link5;
	}
  
	// when mouse hovers over circle, it expands and stops
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("folder5").src = "resources/images/home/folder-open.png";
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
		document.getElementById("folder5").src = "resources/images/home/folder-closed.png";
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