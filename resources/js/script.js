function animate() {
	myMove0();
	myMove1();
	myMove2();
	myMove3();
	myMove4();
}

// ttr
function myMove0() {
	console.log(document.getElementsByTagName("img"));
	var elem = document.getElementById("myAnimation0");
	var xpos = (Math.random() * window.innerWidth) + 0; // x coordinate of circle
	var ypos = (Math.random() * window.innerHeight) + 0; // y coordinate of circle
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
		// event.target.style.width = '50px';
		// event.target.style.height = 'auto';
		event.target.src = "resources/images/folder-open.png";
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		// event.target.style.width = '50px';
		// event.target.style.height = 'auto';
		event.target.src = "resources/images/folder-closed.png";
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, 10);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - 100) {
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
			if (xpos >= window.innerWidth - 60) {
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
	var xpos = (Math.random() * window.innerWidth) + 0; // x coordinate of circle
	var ypos = (Math.random() * window.innerHeight) + 0; // y coordinate of circle
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
		// event.target.style.width = '50px';
		// event.target.style.height = '50px';
		event.target.src = "resources/images/folder-open.png";
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		// event.target.style.width = '50px';
		// event.target.style.height = '50px';
		event.target.src = "resources/images/folder-closed.png";
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, 10);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - 100) {
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
			if (xpos >= window.innerWidth - 60) {
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
	var xpos = (Math.random() * window.innerWidth) + 0; // x coordinate of circle
	var ypos = (Math.random() * window.innerHeight) + 0; // y coordinate of circle
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
		// event.target.style.width = '50px';
		// event.target.style.height = '50px';
		event.target.src = "resources/images/folder-open.png";
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		// event.target.style.width = '50px';
		// event.target.style.height = '50px';
		event.target.src = "resources/images/folder-closed.png";
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, 10);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - 100) {
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
			if (xpos >= window.innerWidth - 60) {
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
	var xpos = (Math.random() * window.innerWidth) + 0; // x coordinate of circle
	var ypos = (Math.random() * window.innerHeight) + 0; // y coordinate of circle
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
		// event.target.style.width = '50px';
		// event.target.style.height = '50px';
		event.target.src = "resources/images/folder-open.png";
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		// event.target.style.width = '50px';
		// event.target.style.height = '50px';
		event.target.src = "resources/images/folder-closed.png";
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, 10);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - 100) {
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
			if (xpos >= window.innerWidth - 60) {
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
	var xpos = (Math.random() * window.innerWidth) + 0; // x coordinate of circle
	var ypos = (Math.random() * window.innerHeight) + 0; // y coordinate of circle
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
		// event.target.style.width = '50px';
		// event.target.style.height = '50px';
		event.target.src = "resources/images/folder-open.png";
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		// event.target.style.width = '50px';
		// event.target.style.height = '50px';
		event.target.src = "resources/images/folder-closed.png";
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, 10);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - 100) {
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
			if (xpos >= window.innerWidth - 60) {
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
function myMove4() {
	var elem = document.getElementById("myAnimation5");
	var xpos = (Math.random() * window.innerWidth) + 0; // x coordinate of circle
	var ypos = (Math.random() * window.innerHeight) + 0; // y coordinate of circle
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
		// event.target.style.width = '50px';
		// event.target.style.height = '50px';
		event.target.src = "resources/images/folder-open.png";
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		// event.target.style.width = '50px';
		// event.target.style.height = '50px';
		event.target.src = "resources/images/folder-closed.png";
		stop = false;
	}, false);

	// calculate location change every 10 milliseconds by calling frame() function
	setInterval(frame, 10);
  
 	function frame() {
		elem.style.visibility = "visible";
	  	// only execute script if the mouse is not hovering over the circle
		if (!stop) {
			// when circle reaches bottom edge of window, bounce back
			if (ypos >= window.innerHeight - 100) {
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
			if (xpos >= window.innerWidth - 60) {
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