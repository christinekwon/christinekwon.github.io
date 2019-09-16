var imgAr = [];
for (var i = 1; i <= 9; i++) {
   imgAr.push("portrait-0" + i + ".svg");
}
for (var i = 10; i <= 42; i++) {
   imgAr.push("portrait-" + i + ".svg");
}
/*var imgAr = ["portrait-01.png", "portrait-02.png", "portrait-03.png", "portrait-04.png", 
"portrait-05.png", "portrait-06.png", "portrait-07.png", "portrait-08.png", "portrait-09.png", 
"portrait-10.png", "portrait-11.png", "portrait-12.png", "portrait-13.png", "portrait-14.png", 
"portrait-15.png", "portrait-16.png", "portrait-17.png", "portrait-18.png", "portrait-19.png", 
"portrait-20.png", "portrait-21.png", "portrait-22.png", "portrait-23.png", "portrait-24.png", 
"portrait-25.png", "portrait-26.png", "portrait-27.png", "portrait-28.png", "portrait-29.png", 
"portrait-30.png", "portrait-31.png", "portrait-32.png", "portrait-33.png", "portrait-34.png", 
"portrait-35.png", "portrait-36.png", "portrait-37.png", "portrait-38.png", "portrait-39.png", 
"portrait-40.png", "portrait-41.png", "portrait-42.png" ];*/
var max = imgAr.length;
var count = 0;
function getRandomImage() {
   if (count < max) {
      console.log("count: "+count);
      path = 'resources/images/portrait/'; // default path here
      var num = Math.floor( Math.random() * imgAr.length );
      var img = imgAr[ num ];
      var invert = Math.floor( Math.random() * 100 );
      var sepia = Math.floor( Math.random() * 1000 );
      var saturate = Math.floor( Math.random() * 5000 ) + 5000;
      var hue = Math.floor( Math.random() * 360 );
      var brightness = Math.floor( Math.random() * 400 ) + 100;
      var contrast = Math.floor( Math.random() * 400 ) + 100;
      var imgStr = '<img src="' + path + img + '" alt = "" class="portrait"'
      + 'style="filter:' 
      + 'invert(' + invert + '%)' 
      + 'sepia(' + sepia + '%)' 
      + 'saturate(' + saturate + '%)' 
      + 'hue-rotate(' + hue + 'deg)' 
      + 'brightness(' + brightness + '%)' 
      + 'contrast(' + contrast + '%);"' 
      //+ 'id="' + img.slice(0, -4) + '"'
      + 'id="portrait"'
      + '>';
      console.log(imgStr);
      div=document.getElementById('portraits');
      div.innerHTML += imgStr;
      imgAr.splice(num, 1);
      console.log("num: " + num);
      console.log(imgAr);
      count++;
   }
   else {
      return;
   }
}

$( function() {
   $( "#draggable" ).draggable();
} );

function getImages() {
   setInterval(getRandomImage, 200);
   //setInterval(getRandomImage, 10);
}

const dragStart = (event) => {
   event.dataTransfer.setData("text/plain", event.target.id);
}

const allowDropComputer = (event) => {
   event.preventDefault();
    //event.currentTarget.style.visibility = 'visible';
   //event.currentTarget.style.padding = '6vw';
   //event.currentTarget.style.color = 'black';
   //event.currentTarget.style.shadow = '2px 2px white';
   event.currentTarget.innerHTML = 'code';
   //document.getElementbyId("drag-me").innerHTML="CS";
}

const allowDropDesign = (event) => {
   event.preventDefault();
   //event.currentTarget.style.visibility = 'visible';

   //event.currentTarget.style.padding = '6vw';
   event.currentTarget.innerHTML = 'design';
}

const dropComputer = (event) => {
   event.preventDefault();
   window.location = 'file:///Users/christinekwon/Documents/portfolio/cs.html';
}

const dropDesign = (event) => {
   event.preventDefault();
   window.location = 'file:///Users/christinekwon/Documents/portfolio/design.html';
}