var css=document.querySelector("h3")
var colorLeft= document.querySelector(".color1")
var colorRight= document.querySelector(".color2")
var body=document.getElementById("body")

function setGradient(){
    body.style.background="linear-gradient(to right,"
    +colorLeft.value+
    "," 
    +colorRight.value+
    ")";
    css.innerText=    body.style.background+";";
    
 }
colorLeft.addEventListener("input",setGradient)
colorRight.addEventListener("input",setGradient)
