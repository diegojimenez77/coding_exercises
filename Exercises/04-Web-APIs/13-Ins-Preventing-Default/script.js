var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

//Action to be performed on click store in named function
function showResponse(event) {
    //Prevent default action
    event.preventDefault();
    console.log(event);
    var response = "Thank you for submission" + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
    submissionResponseEl.textContent = response;
}

//Add Listener to submit element
submitEl.addEventListener("click", showResponse);