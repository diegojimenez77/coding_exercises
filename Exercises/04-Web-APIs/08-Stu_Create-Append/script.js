var background = document.body.setAttribute("style", "background-color:black;")

var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");

//Crate ordered list element
var listEl = document.createElement("ol");

//Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

li1.textContent = "Neumaticos nuevos";
li2.textContent = "Cambio de aceite";
li3.textContent = "Cambio de frenos";
li4.textContent = "Afinacion de motor";

h1El.textContent = "Bienvenido a mi pagina";
kittenEl.textContent = "Este es mi carrito";
nameEl.textContent = "Su nombre es Mini";
favoriteEl.textContent = "Sus repuestos favoritos son:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "color:white; margin:auto; width:50%; text-align:center; padding:20px;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "https://i.pinimg.com/564x/ed/df/45/eddf452fb49bede335719cb5fce0b894.jpg");
imgEl.setAttribute("style", "border-radius: 20px");
kittenEl.setAttribute("style", "font-size:35px; color:blue;")
nameEl.setAttribute("style", "font-size:35px; color:white; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px; color: white; background-color:#333333;")
listEl.setAttribute("style", "font-size:20px; color:white; margin-left:35px; padding: 5px;");
li1.setAttribute("style", "background-color:gray;");
li2.setAttribute("style", "background-color:blue;");
li3.setAttribute("style", "background-color:orange;");
li4.setAttribute("style", "background-color:green;");
