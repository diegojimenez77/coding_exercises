var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");
var site4El = document.querySelector(".site4");
var h4Tags = document.querySelectorAll("h4");
var images = document.querySelectorAll("img");

for(var i=0; i < h4Tags.length; i++){
    h4Tags[i].setAttribute("style","color:blue; font-Size:30px; font-weight:bolder; padding-left:20px; margin:0px;");
}
site1El.children[0].textContent = "Sitio 1";
site1El.children[1].children[0].setAttribute("src", "https://i.pinimg.com/564x/a5/97/e2/a597e2286dddec5146c2139e314b2876.jpg");
site1El.children[1].children[0].setAttribute("style","width: 400px");

site2El.children[0].textContent = "Sitio 2";
site2El.children[1].children[0].setAttribute("src","https://i.pinimg.com/564x/e5/ee/65/e5ee654cc5fd831b7118dbff8f86e255.jpg");
site2El.children[1].children[0].setAttribute("style","width: 400px");

site3El.children[0].textContent = "Sitio 3";
site3El.children[1].children[0].setAttribute("src","https://i.pinimg.com/736x/ec/85/16/ec8516c3e89bf524dd6a7360e2f03ede.jpg");
site3El.children[1].children[0].setAttribute("style","width: 400px");

site4El.children[0].textContent = "Sitio 4";
site4El.children[1].children[0].setAttribute("src","https://i.pinimg.com/564x/0c/93/08/0c9308fb0886e2df3d505eaf85c943b7.jpg");
site4El.children[1].children[0].setAttribute("style","width:400px");