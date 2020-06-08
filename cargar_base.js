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
  document.getElementById("naveg").style.display= "block";
  document.getElementById("naveg-ext").style.display= "block";
  var element = document.getElementById("nav-icon");
  element.classList.toggle("open");
}
