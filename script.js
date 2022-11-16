let myBlock;
let myFunctionList;
let funcList = [];
const movementArray = ['left', 'down', 'right', 'up'];
document.addEventListener("DOMContentLoaded", ()=> {
    console.log("Ready.");
    myBlock = document.createElement("div");
    myBlock.textContent = "Hello World!";
    myBlock.style.width = "100px";
    myBlock.style.height = "100px";
    myBlock.style.background = `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                                linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                                linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)`;
    myBlock.style.color = "white";
    myBlock.style.fontWeight = "600";
    myBlock.style.borderRadius = "5px";
    myBlock.style.lineHeight = "100px";
    myBlock.style.textAlign = "center";
    myBlock.style.position = "absolute"; // important so we can move the element throughout the page
    myBlock.style.top = "100px";
    myBlock.style.left = "100px";
    myBlock.style.transition = "all .3s ease";
    myBlock.style.boxShadow = "4px 4px 10px gray";
    document.body.appendChild(myBlock); // Add myBlock element to the body

    myFunctionList = document.createElement("div");
    document.body.appendChild(myFunctionList);
    document.body.style.margin = "0";

    //info element
    let info = document.createElement("div");
    info.innerHTML = `Start by pressing any arrow key or "w", "s", "a" or "d", then press Enter or Space.
                      You can even generate random direction by pressing the "r" key. 
                      You can also delete the given direction by clicking it. DOM Commander project from ( www.udemy.com/course/dom-javascript-project-course/ )`;
    info.style.position = "absolute";
    info.style.width = "400px";
    info.style.bottom = "10px";
    info.style.left = "10px";
    info.style.fontWeight = "600";
    info.style.textAlign = "justify";
    info.style.backgroundColor = "#dcdcdc";
    info.style.borderRadius = "10px";
    info.style.border = "1px solid #c2c2c2";
    info.style.padding = "5px";
    document.body.appendChild(info);
    //end info element
});

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    let key = e.key;

    switch(key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            addfunction("up");
            randomColor(myBlock);
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            addfunction("down");
            randomColor(myBlock);
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            addfunction("left");
            randomColor(myBlock);
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            addfunction("right");
            randomColor(myBlock);
            break;
        case ' ':
        case 'Enter':
            mover();
            break;
        case 'r':
        case 'R':
            addfunction(movementArray[Math.floor(Math.random()*movementArray.length)]);
            break;
    }
}, false);

//Add linear-gradient background to the given element
function randomColor(el) {
    let color1 = Math.random().toString();
        color1 = "#" + color1.substring(color1.length - 6);
    let color2 = Math.random().toString();
        color2 = "#" + color2.substring(color2.length - 6);
    el.style.background = `linear-gradient(${color1}, ${color2})`;
}

//Add function "direction" to myFunctionList element and add span elements to the array funcList or removes it when clicked
function addfunction(func) {
    let span = document.createElement("span");
    span.textContent = '+' + func;
    span.style.padding = "10px";
    span.style.border = "1px solid gray";
    span.style.fontWeight = "600";
    span.style.transition = "all .3s ease";

    span.addEventListener("mouseover", function(){
        this.style.backgroundColor = "#474747";
        this.style.color = "white";
    });

    span.addEventListener("mouseout", ()=> {
        span.style.backgroundColor = "white";
        span.style.color = "black";
    });

    span.addEventListener("click", function(){
        let currIndex = funcList.indexOf(this);
        funcList.splice(currIndex, 1);
        myFunctionList.removeChild(this);
    });
    
    myFunctionList.appendChild(span);
    funcList.push(span);
}

//Move myBlock element to directions specified in funcList array and removes them from it and from myFunctionList element
function mover() {
    if(funcList.length > 0) {
        randomColor(myBlock);
        let curr = myBlock.getBoundingClientRect();
        let el = funcList.shift();
        let item = el.innerHTML.replace('+', '');
        myFunctionList.removeChild(el);
        myBlock.innerHTML = `Move ${item}`;

        switch(item) {
            case 'left':
                myBlock.style.left = curr.left - curr.width + "px";
                break;
            case 'right':
                myBlock.style.left = curr.left + curr.width + "px";
                break;
            case 'up':
                myBlock.style.top = curr.top - curr.height + "px";
                break;
            case 'down':
                myBlock.style.top = curr.top + curr.height + "px";
                break;
        }
        setTimeout(mover, 300);
    }else {
        myBlock.textContent = "Set Path!";
        return;
    }
}