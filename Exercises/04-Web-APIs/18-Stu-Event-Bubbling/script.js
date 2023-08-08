//Selects carousel element
var carousel = document.querySelector(".carouselbox");

// Selects buttons using their parent carousel element
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
    "https://i.pinimg.com/564x/08/8c/88/088c88f4ed285d6d81d6dcf7ac53724a.jpg",
    "https://i.pinimg.com/564x/7b/3d/2b/7b3d2beb644d254ad6f7e14b971e026b.jpg",
    "https://i.pinimg.com/564x/42/55/63/425563017677152c4853a37d8b9f7f68.jpg",
    "https://i.pinimg.com/564x/21/20/2c/21202c83338807a5accc361ac82ba1e1.jpg",
    "https://i.pinimg.com/564x/4f/53/dd/4f53dd0663583bd312cea81e634459bc.jpg",
    "https://i.pinimg.com/564x/2a/b4/51/2ab4515efd65d4c7c46dc929ca9564ac.jpg"
];

carousel.style.backgroundImage= "url('https://i.pinimg.com/750x/6d/b1/9d/6db19ddcfb59eac0030d569d2b16172f.jpg')";

function navigate(direction){
    index = index + direction;
    if(index < 0) {
        index = images.length -1;
    } else if (index>images.length-1) {
        index = 0;
    }
    currentImage = images[index];
    carousel.style.backgroundImage = "url('" + currentImage + "')";
}

//Clicking on image opens a new window containing the image
carousel.addEventListener("click", function(){
    window.location.href = images[index];
});

//Clicking on next button displays next image in carousel
next.addEventListener("click", function(event){
    //Stops event from bubbling up and new window opening
    event.stopPropagation();
    navigate(1);
});

//Clicking previous displays previous image in carousel
prev.addEventListener("click", function(event){
    //Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();
    navigate(-1);
});

navigate(0);
