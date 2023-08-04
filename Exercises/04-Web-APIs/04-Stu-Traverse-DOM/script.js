// var artTitle = document.body.children[1].children[0];
// console.log(artTitle);
// artTitle.style.fontSize = "50px";

// var headerTitle = document.body.children[0].children[0];
// console.log(headerTitle);
// headerTitle.style.color = "White";

var artTitle2 = document.getElementById("articles");
console.log(artTitle2);
artTitle2.style.fontSize = "40px"; 

var headerTitle2 = document.getElementById("header");
console.log(headerTitle2);
headerTitle2.children[0].style.color = "white";

var pTags = document.querySelectorAll("p");
for (var i = 0; i < pTags.length; i++){
    pTags[i].setAttribute("style", "color:blue; font-size: 20px; text-align: center;");
}