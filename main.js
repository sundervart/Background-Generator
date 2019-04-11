var currentBackground = document.querySelector("h3");
var color1 =  document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#background");
var randomButton = document.querySelector("#random");

color1.value = "#ff0000";
color2.value = "#ffff00";
currentBackground.textContent = "linear-gradient(to right, red , yellow);";

function generateNum (){
    var result = "";
    for (var i = 1; i<=3; i++){
        if(i === 1){
        var num = Math.floor((Math.random() * 255) + 1);
        result = result + "rgb(" + num + ", ";
        }
        else if( i === 2){
            var num = Math.floor((Math.random() * 255) + 1);
            result = result + num + ", ";
        }
        else if (i === 3){
            num = Math.floor((Math.random() * 255) + 1);
            result = result + num + ")"
        }
        
    }
    return result;
}

function randomGradiant (){
    var one = generateNum()
    var two = generateNum()
    body.style.background = "linear-gradient(to right, " + one + ", " + two + ")";
    currentBackground.textContent = body.style.background + ";";
    
}

function setBackground(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    currentBackground.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);

randomButton.addEventListener("click",randomGradiant)