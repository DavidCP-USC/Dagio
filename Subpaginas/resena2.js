document.addEventListener("DOMContentLoaded", function() {
  var radios = document.querySelectorAll("input[type='radio']");
  var estrella5 = document.getElementById("estrella5");
  var estrella4 = document.getElementById("estrella4");
  var estrella3 = document.getElementById("estrella3");
  var estrella2 = document.getElementById("estrella2");
  var estrella1 = document.getElementById("estrella1");

  function seleccionarEstrellas(cantidadEstrellas) {
    radios.forEach(function(radio, index) {
      radio.checked = (index < cantidadEstrellas);
      radio.style.borderColor = (index < cantidadEstrellas) ? "yellow" : ""; // Establece el color del borde a amarillo si está dentro de la cantidad de estrellas especificada, de lo contrario, quita el color del borde
    });
  }

  estrella5.addEventListener("click", function() {
    seleccionarEstrellas(5); // Selecciona 5 estrellas si se hace clic en estrella5
  });

  estrella4.addEventListener("click", function() {
    estrella5.removeAttribute("checked");
    seleccionarEstrellas(4); // Selecciona 4 estrellas si se hace clic en estrella4
  });

  estrella3.addEventListener("click", function() {
    estrella5.removeAttribute("checked");
    estrella4.removeAttribute("checked");
    seleccionarEstrellas(3); // Selecciona 3 estrellas si se hace clic en estrella3
  });

  estrella2.addEventListener("click", function() {
    estrella5.removeAttribute("checked");
    estrella4.removeAttribute("checked");
    estrella3.removeAttribute("checked");
    seleccionarEstrellas(2); // Selecciona 2 estrellas si se hace clic en estrella2
  });

  estrella1.addEventListener("click", function() {
    estrella5.removeAttribute("checked");
    estrella4.removeAttribute("checked");
    estrella3.removeAttribute("checked");
    estrella2.removeAttribute("checked");
    seleccionarEstrellas(1); // Selecciona 1 estrella si se hace clic en estrella1
  });



});