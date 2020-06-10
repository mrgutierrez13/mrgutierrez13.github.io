///CARGAR HTML GENERAL
fetch("cabezera.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".cabezera").innerHTML = data;

    // Para que la barra de navegacion siga la pantalla
    window.onscroll = function () {
      navStick();
    };

    function navStick() {
      var header = document.getElementById("head");
      var navbar = document.getElementById("navbar");
      var sticky = header.clientHeight;
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  });
fetch("footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });
fetch("icon_bar.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".barra-enlaces").innerHTML = data;
  });

function toggleNav() {
  var element1 = document.getElementById("naveg");
  var element2 = document.getElementById("naveg-ext");
  var element3 = document.getElementById("nav-icon");
  element1.classList.toggle("open");
  element2.classList.toggle("open");
  element3.classList.toggle("open");
}

///CARGAR AÑADIDOS: NOTICIA, POP-UP, ETC

fetch("widgets.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector(".widgets").innerHTML = data;

    ///PARA CERRAR MODAL///
    let button = document.getElementById("close");
    let cerrar = document.getElementById("close-ext");
    let modal = document.getElementById("modal");

    if (button !== null && cerrar !== null) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "none";
      });
      cerrar.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "none";
      });
    }
  });

///MENSAJE POP-UP

var element = document.getElementById("myForm");

var t = setTimeout(openPopUp, 5000);
function openPopUp() {
  element = document.getElementById("myForm");
  element.style.visibility = "visible";
  element.style.opacity = "1";
  element.style.maxHeight = "60vh";
}

var element2 = document.getElementById("myButton");

var t2 = setTimeout(openPopUp2, 5500);
function openPopUp2() {
  element2 = document.getElementById("myButton");
  element2.style.visibility = "visible";
  element2.style.opacity = "1";
  element2.style.maxHeight = "60vh";
}

function openForm() {
  document.getElementById("myForm").style.visibility = "visible";
  document.getElementById("myForm").style.opacity = "1";
  document.getElementById("myForm").style.maxHeight = "60vh";
  document.getElementById("myButton").style.visibility = "hidden";
  document.getElementById("myButton").style.opacity = "0";
}

function closeForm() {
  document.getElementById("myForm").style.visibility = "hidden";
  document.getElementById("myForm").style.opacity = "0";
  document.getElementById("myForm").style.maxHeight = "0";
  document.getElementById("myButton").style.visibility = "visible";
  document.getElementById("myButton").style.opacity = "1";
}
