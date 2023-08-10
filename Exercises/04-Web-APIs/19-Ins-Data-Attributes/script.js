var imageContainer = document.querySelector(".img-container");

//Listen for any clicks within the img-contianer div
imageContainer.addEventListener("click", function(event){
    var element = event.target;

    //check if the clicked element was an image
    if(element.matches("img")) {
        //get the current value of the image's data-state attribute
        var state = element.getAttribute("data-state");

        if(state === "still") {
            //change the data-state attribute's value
            //There are two different ways this attribute can be set
            element.dataset.state = "animate";
            element.setAttribute("data-state", "animate");

            //Update tehe image's source to the string being stored in the data-animate attribute
            element.setAttribute("src", element.dataset.animate);
        } else {
            //change the attributes back to their non-animated values
            element.dataset.state = "still";
            element.setAttribute("src", element.dataset.still);
        }
    }
});