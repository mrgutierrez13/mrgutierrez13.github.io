///CARGAR HTML GENERAL
///<link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=PT+Serif&display=swap" rel="stylesheet">

"use strict";

const tipo_fuente = document.createElement("link");

tipo_fuente.setAttribute("rel", "stylesheet");

let str =
  "https://fonts.googleapis.com/css2?family=PT+Sans&family=PT+Serif&display=swap";

tipo_fuente.setAttribute("href", str);

document.querySelector("head").appendChild(tipo_fuente);

fetch("../modules/nueva_cabezera.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".cabezera").innerHTML = data;
  });

fetch("../modules/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });

fetch("../modules/icon_bar.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".barra-enlaces").innerHTML = data;
  });

function toggleNav() {
  var nav = document.querySelector(".menu-navegacion");
  var navBack = document.querySelector(".menu-navegacion-backdrop");
  nav.classList.toggle("open");
  navBack.classList.toggle("open");
}
