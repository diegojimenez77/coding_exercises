//Access multiple elements using .querySelectorAll()
var divTags = document.querySelectorAll("div");
var pTags = document.querySelectorAll("p");
var imgEl = document.querySelectorAll("img");

//Access element by ID using .querySelector()
var changeP = document.querySelector("#change2");

//Sets first pTags to have a font-size of 40px
pTags[0].setAttribute("style", "font-size: 60px; color: red;");

//Sets changP to have multiple style attributes
changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

//Sets image source of the first image
imgEl[0].setAttribute("src", "https://i.pinimg.com/564x/07/9f/0c/079f0c448ccdd7a9f199265181fb6918.jpg");

//Adds size and width styling to image
imgEl[0].setAttribute("style", "width:80%");

//Loops through divTags to set each one to have the color blue and the font size of 30px
for(var i = 0; i < divTags.length; i++) {
    divTags[i].setAttribute("style", "color:blue; font-size: 30px");
}