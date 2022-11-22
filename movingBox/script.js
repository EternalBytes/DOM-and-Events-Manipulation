/*
  This code was written by github.com/MayconParanhos
*/

let box = document.getElementById("box");
let header = document.getElementById("header"); 
let offsetLeft, offsetTop, initialX, initialY;

//START EVENT HANDLERS FOR BROWSERS ON PC AND NOTEBOOKS
header.addEventListener("mousedown", function(e){

  e.preventDefault();
  offsetLeft = box.offsetLeft;
  offsetTop = box.offsetTop;
  initialX = e.clientX;
  initialY = e.clientY;
    
  box.addEventListener("mousemove", move, false);

  window.addEventListener("mouseup", function() {
    box.removeEventListener("mousemove", move, false);
  }, false);

}, false);

function move(e){
  this.style.left = offsetLeft + e.clientX - initialX + "px";
  this.style.top =  offsetTop + e.clientY - initialY + "px";
  }
//END EVEND HANDLERS FOR PC AND NOTEBOOKS

//START OF HANDLERS FOR ANDROID BROWSERS
header.addEventListener("touchstart", function(e) {
  e.preventDefault();

  offsetLeft = box.offsetLeft;
  offsetTop = box.offsetTop;
  let t = e.touches;
  initialX = t[0].clientX;
  initialY = t[0].clientY;

  box.addEventListener("touchmove", swipe, false);

  window.ontouchend = (e)=> {
    e.preventDefault();
    box.removeEventListener("touchmove", swipe, false);
  };

}, false);

function swipe(e) {
  let moved = e.touches;
  this.style.left = offsetLeft + moved[0].clientX - initialX +"px";
  this.style.top =  offsetTop + moved[0].clientY - initialY +"px";
}
  //END OF HANDLERS FOR ANDROID BROWSERS