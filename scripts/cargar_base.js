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
  const nav = document.querySelector(".menu-navegacion");
  const navBack = document.querySelector(".menu-navegacion-backdrop");
  nav.classList.toggle("open");
  navBack.classList.toggle("open");
}

//para que el menu de navegacion siga la pantalla

let lastScrollTop = 0;

function siguePantalla() {
  if (document.querySelector(".menu-navegacion") != null) {
    const navbar = document.querySelector(".menu-navegacion");

    // Evalua el primero, si este no es valido usa el segundo (short circuit evaluation)
    let st = window.pageYOffset || document.documentElement.scrollTop;

    navbar.classList.add("sticky");

    if (st > lastScrollTop) {
      // downscroll code
      navbar.classList.remove("efecto");
    } else {
      // upscroll code
      navbar.classList.add("efecto");
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  } else {
    console.log("navbar aun no cargo.");
  }
}

window.addEventListener("scroll", siguePantalla, false);
window.addEventListener("load", siguePantalla, false);
