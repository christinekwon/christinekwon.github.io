function animate() {
	// move("cs-Animation-0", cs_link0);
	move("cs-Animation-1", cs_link1);
	move("cs-Animation-2", cs_link2);
	move("cs-Animation-3", cs_link3);
	move("cs-Animation-4", cs_link4);
	// move("cs-Animation-5", cs_link5);
	move("cs-Animation-6", cs_link6);
	move("cs-Animation-7", cs_link7);
	move("cs-Animation-8", cs_link8);

	move("cd-Animation-0", cd_link0);
	
	move("design-Animation-0", design_link0);
}

var mirror = document.getElementById("mirror");

mirror.addEventListener("mouseover", function( event ) {   
	mirror.parentElement.style.zIndex = "10";
	mirror.style.transform ="rotate(2160deg)";
	document.getElementById("me-text").style.opacity = "0.8";
}, false);

mirror.addEventListener("mouseout", function( event ) {   
	mirror.parentElement.style.zIndex = "0";
	mirror.style.transform ="rotate(0)";
	document.getElementById("me-text").style.opacity = "0.0";

}, false);

// var art_container = document.getElementById("art-container");
// var art = document.getElementById("art");

// art.addEventListener("mouseover", function( event ) {   
// 	art_container.style.zIndex = "10";
// 	art.style.transform ="rotate(-2165deg)";
// }, false);

// art.addEventListener("mouseout", function( event ) {   
// 	art_container.style.zIndex = "-1";
// 	art.style.transform ="rotate(-5deg)";
// }, false);

function calcLeftTooltip(elem, tooltip) {
	let left = elem.style.left;
	left = parseInt(left.substring(0, left.length - 1));
	left -= 160;
	left += "px";
	tooltip.style.left = left;
	tooltip.style.top = elem.style.top;
}

function calcRightTooltip(elem, tooltip) {
	let left = elem.style.left;
	left = parseInt(left.substring(0, left.length - 1));
	left += 180;
	left += "px";
	tooltip.style.left = left;
	tooltip.style.top = elem.style.top;
}

function move(id, link) {
	var elem = document.getElementById(id);

	var category = id.split(/\s*\-\s*/g)[0];
	var num = id.split(/\s*\-\s*/g)[2];

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
		location.href = link;
	}
	var folderId = category + "-folder" + num;
	// when mouse hovers over circle, it expands and stops
	var tooltip = elem.parentElement.children[1];

	elem.addEventListener("mouseover", function( event ) {   

		document.getElementById(folderId).src = "resources/images/home/folder-open.png";
		elem.style.backgroundColor = backgroundColor1;
		elem.style.zIndex = "2";
		if (xpos > window.innerWidth / 2) {
			calcLeftTooltip(elem, tooltip);
		}
		else {
			calcRightTooltip(elem, tooltip);
		}
		tooltip.style.opacity = "1.0";
		stop = true;
	}, false);
  
	// when mouse is stops hovering over circle, go back go original size && continue moving
	elem.addEventListener("mouseout", function( event ) {   
		document.getElementById(folderId).src = "resources/images/home/folder-closed.png";
		elem.style.backgroundColor = backgroundColor0;
		elem.style.zIndex = "1";
		tooltip.style.opacity = "0.0";
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