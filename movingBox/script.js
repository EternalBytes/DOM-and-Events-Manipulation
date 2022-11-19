let box = document.getElementById("box"); 
let offLeft, offTop, iniX, iniY;

box.addEventListener("mousedown", function(e){

    e.preventDefault();
    offLeft = this.offsetLeft;
    offTop = this.offsetTop;
    iniX = e.clientX;
    iniY = e.clientY;
    
    this.addEventListener("mousemove", handler, false);

    window.addEventListener("mouseup", function(e) {
        box.removeEventListener("mousemove", handler, false);
      }, false);

}, false);



function handler(e){
  this.style.left = offLeft + e.clientX - iniX + "px";
  this.style.top =  offTop + e.clientY - iniY + "px";
  }