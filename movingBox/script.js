let box = document.getElementById("box"); 
let offsetLeft, offsetTop, initialX, initialY;

box.addEventListener("mousedown", function(e){

    e.preventDefault();
    offsetLeft = this.offsetLeft;
    offsetTop = this.offsetTop;
    initialX = e.clientX;
    initialY = e.clientY;
    
    this.addEventListener("mousemove", handler, false);

    window.addEventListener("mouseup", function() {
        box.removeEventListener("mousemove", handler, false);
      }, false);

}, false);

function handler(e){
  this.style.left = offsetLeft + e.clientX - initialX + "px";
  this.style.top =  offsetTop + e.clientY - initialY + "px";
  }