//https://medium.com/madhash/zoom-scroll-69cc42a913d0

//const zoomElement = document.querySelector(".zoom");
//let zoom = 1;
//const ZOOM_SPEED = 0.1;
//document.addEventListener("wheel", function (e) {
//if (e.deltaV > 0) {
//zoomElement.style.transform = `scale($ {(zoom += ZOOM_SPEED)})`;
//} else {
//zoomElement.style.transform = `scale($ {(zoom -= ZOOM_SPEED)})"`;
//}
//});

// https://stackoverflow.com/questions/33811041/javascript-zoom-in-on-mouseover-without-jquery-or-plugins

function zoomIn(event) {
  var element = document.getElementById("overlay");
  element.style.display = "inline-block";
  var img = document.getElementById("imgZoom");
  var posX = event.offsetX ? event.offsetX : event.pageX - img.offsetLeft;
  var posY = event.offsetY ? event.offsetY : event.pageY - img.offsetTop;
  element.style.backgroundPosition = -posX * 2 + "px " + -posY * 4 + "px";
}

function zoomOut() {
  var element = document.getElementById("overlay");
  element.style.display = "none";
}
