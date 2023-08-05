var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

var message = "Este es un texto de prueba, para probar el speed reading, el texto que se mostrara, sera palabra a palabra controlado por velocidad de aparicion por palabra, sera este metodo util para mejorar la velocidad de lectura de una persona.";
var words = message.split(' ');

function countdown() {
    var timeLeft = 5;
    // Use setInterval() method to call a function to be executed every 1000 miliseconds
    var timeInterval = setInterval(function (){
        timeLeft--;
        timerEl.textContent = timeLeft + " tiempo restante";
        timerEl.setAttribute("style", "color:white; text-align:center;")
        if(timeLeft === 0) {
            //Stops execution of action at set interval
            clearInterval(timeInterval);
            timerEl.textContent = "";
            displayMessage();
        }
    },200);
}

//Displays the message one word at a time
function displayMessage(){
    var wordCount = 0;
    //Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var msgInterval = setInterval(function (){
        //If there are no more words left in the message
        if(words[wordCount] === undefined) {
            //Use `clearInterval()` to stop the timer
            clearInterval(msgInterval);
        } else {
            //Display one word of the message
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 200);
}

countdown();