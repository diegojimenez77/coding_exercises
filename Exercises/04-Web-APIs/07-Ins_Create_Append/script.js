var background = document.querySelector("body");
background.setAttribute("style","background-color:black; color:white");

//Stores user response in variable
var tagName = prompt("Porfavor ingresa una etiqueta de HTML (ej. h1, h2, p, div):", "Ingresa la etiqueta");

if(tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div"){
    alert("por favor ingresa una etiqueta valida");
} else {
    //Crates element based on tag entered by user
    var tag = document.createElement(tagName);

    //Adds text content to created tag
    // var tagText = prompt("Que texto quieres que tenga", "Ingresa aqui el texto");

    // tag.textContent = "Esto esta siendo realizado via prompts. Es una etiqueta " + tagName + ".";
    tag.textContent = prompt("Que texto quieres que tenga", "Ingresa aqui el texto");

    //Appends tag as child of document body
    document.body.appendChild(tag);
}

var nextTag = true;

do {
var nextTag = confirm ("Te gustaria agregar otra etiqueta?");

if (nextTag === true) {
    var secondTagName = prompt("Por favor ingresa otra etiqueta HTML (ej. h1, h2, p, div):", "Ingresa la etiqueta aqui");
    if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
        alert("Por favor ingresa una etiqueta valida");
    } else {
        var secondTag = document.createElement(secondTagName);
        secondTag.textContent = prompt("Que texto quieres que tenga", "Ingresa aqui el texto");        ;
        document.body.appendChild(secondTag);
    }
}
} while (nextTag === true);