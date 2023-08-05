var background = document.body.setAttribute("style", "background-color:black;")
//Selects element by class
var timeEl = document.querySelector(".time");

//Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " tiempo restante para mostrar vehiculo.";
        timeEl.setAttribute("style", "color:white; text-align:center;")
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            //Calls function to create and append image
            sendMessage();
        }
    }, 500);
}

//Function to create and append colorsplosion image
function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "https://i.pinimg.com/564x/92/08/3c/92083c10bb201ec1377c3ada073b6dbb.jpg");
    mainEl.appendChild(imgEl);
    imgEl.style.position = "fixed";
    imgEl.style.top = "50%";
    imgEl.style.left = "50%";
    imgEl.style.transform = "translate(-50%, -50%)";
    imgEl.style.borderRadius = "20px";
}

setTime();