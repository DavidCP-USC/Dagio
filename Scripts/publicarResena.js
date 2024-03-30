document.addEventListener("DOMContentLoaded", function() {
    var request = new XMLHttpRequest();
    request.open("GET", "./../Datos/resenas.xml", true);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var xmlDoc = request.responseXML;
            mostrarPublicaciones(xmlDoc);
        }
    };
    request.send();
});

function mostrarPublicaciones(xmlDoc) {
    var publicaciones = xmlDoc.getElementsByTagName("publicacion");
    var contenidoPublicaciones = document.getElementById("contenidoXML");
    var divTitulo = document.createElement("div");
    divTitulo.innerHTML = "<h2>Reseñas Publicadas</h2>";
    contenidoPublicaciones.appendChild(divTitulo);
    for (var i = 0; i < publicaciones.length; i++) {
        var publicacion = publicaciones[i];
        var valoracion = publicacion.getElementsByTagName("valoracion")[0].textContent;
        var nombre = publicacion.getElementsByTagName("nombre")[0].textContent;
        var texto = publicacion.getElementsByTagName("text")[0].textContent;

        var divPublicacion = document.createElement("div");
        divPublicacion.classList.add("resena");
        divPublicacion.innerHTML = "<h3>" + nombre + "</h3><p class=\"textoResenas\">Valoración: " + valoracion + "</p><p class=\"textoResenas\">" + texto + "</p>";
        contenidoPublicaciones.appendChild(divPublicacion);
    }
}