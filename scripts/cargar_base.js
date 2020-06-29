///CARGAR HTML GENERAL
///<link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=PT+Serif&display=swap" rel="stylesheet">

"use strict";

const tipo_fuente = document.createElement("link");

tipo_fuente.setAttribute("rel", "stylesheet");

let str =
  "https://fonts.googleapis.com/css2?family=PT+Sans&family=PT+Serif&display=swap";

tipo_fuente.setAttribute("href", str);

document.querySelector("head").appendChild(tipo_fuente);

cargarElemento("../modules/cabezera.html", ".cabezera");
cargarElemento("../modules/footer.html", "footer");
cargarElemento("../modules/icon_bar.html", ".barra-enlaces");

function cargarElemento(nombreHTML, elementoDOM) {
  if (typeof nombreHTML == "string" && typeof elementoDOM == "string") {
    fetch(nombreHTML)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        document.querySelector(elementoDOM).innerHTML = data;
      });
  } else {
    console.log("no se pasaron los elementos Web correctos");
  }
}

//logica para menu de navegacion mobil

function toggleNav() {
  let nav = document.querySelector(".menu-navegacion");
  let navBack = document.querySelector(".menu-navegacion-backdrop");
  nav.classList.toggle("open");
  navBack.classList.toggle("open");
}

//para que el menu de navegacion siga la pantalla

function siguePantalla() {
  let navbar = document.querySelector(".menu-navegacion");
  if (window.pageYOffset >= 400 && window.pageYOffset < 500) {
    navbar.classList.add("animacion");
  } else {
    navbar.classList.remove("animacion");
  }
  if (window.pageYOffset >= 500) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", siguePantalla);
window.addEventListener("load", siguePantalla);
