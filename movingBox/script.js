let box = document.getElementById("box");
let header = document.getElementById("header"); 
let offsetLeft, offsetTop, initialX, initialY;

header.addEventListener("mousedown", function(e){

    e.preventDefault();
    offsetLeft = box.offsetLeft;
    offsetTop = box.offsetTop;
    initialX = e.clientX;
    initialY = e.clientY;
    
    box.addEventListener("mousemove", handler, false);

    window.addEventListener("mouseup", function() {
        box.removeEventListener("mousemove", handler, false);
      }, false);

}, false);

function handler(e){
  this.style.left = offsetLeft + e.clientX - initialX + "px";
  this.style.top =  offsetTop + e.clientY - initialY + "px";
  }