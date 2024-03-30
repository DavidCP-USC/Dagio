$(document).ready(function() {
  
    function actualizarEstrellas(estrellaSeleccionada) {
        // Desactivar todas las estrellas y restablecer el color del borde
        $("input[type='radio']").prop('checked', false).css('border-color', '');
        
        // Activar las estrellas hasta la seleccionada y cambiar su color de borde a amarillo
        for (var i = 1; i <= estrellaSeleccionada; i++) {
        $("#estrella" + i).prop('checked', true).css('border-color', 'yellow');
        }
    }
    $("#estrella5, #estrella4, #estrella3, #estrella2, #estrella1").change(function() {
        var estrellaSeleccionada = parseInt($(this).val());
        actualizarEstrellas(estrellaSeleccionada);
    });
    
    var contadorDivs = 0;
    // Función para publicar una reseña
    $("#formularioResena").submit(function(event) {
      event.preventDefault(); // Evitar que se envíe el formulario de forma predeterminada
      contadorDivs++;
      var contenidoPublicaciones = $("#contenidoXML");
      // Comprobar si el div tiene hijos al cargar la página
      if ($('#contenidoXML').children().length == 0) {
          var divTitulo = $("<div>").html("<h2>Reseñas Publicadas</h2>");
          contenidoPublicaciones.append(divTitulo);
       }
      // Obtener los valores del formulario
      var valoracion = $("input[name='valoracion']:checked").val();
      if (valoracion !== undefined) { // Comprobar si la valoración está definida
          valoracion += " estrellas"; // Concatenar "estrellas" al valor de la valoración
      } else {
          valoracion = "0 estrellas"; // Si no está definida, establecer un mensaje predeterminado
      }
      
      var nombre = $("#nombre").val();
      var texto = $("#text").val();

      var divPublicacion = $("<div>").addClass("resena").html("<h3>" + nombre + "</h3><p class=\"textoResenas\">Valoración: " + valoracion + "</p><p class=\"textoResenas\">" + texto + "</p>");
      

      // Obtener las imágenes previamente cargadas
      var imagenes = [];
      $("#preview .preview-image img").each(function() {
          imagenes.push($(this).attr("src"));
      });

    // Publicar las imágenes junto con la reseña
    if (imagenes.length > 0 && imagenes.length<=5) {
      for (var i = 0; i < imagenes.length; i++) {

        var imagen = $("<img>").attr("src", imagenes[i]).addClass("centrar");
        var imagen2 = $("<img>").attr("src", imagenes[i]).addClass("imagenOculta");
        imagen2.addClass("centrado");
        divPublicacion.append(imagen);
        divPublicacion.append(imagen2);
        // Añadir click
        imagen.mouseover(function() {
            $(this).next().removeClass("imagenOculta");
        });
        imagen.mouseout(function() {
            $(this).next().addClass("imagenOculta");
        });
        

      }
      contenidoPublicaciones.append(divPublicacion);
      if (contadorDivs > 5) {
        divPublicacion.hide();
        }
      $("#preview").empty().text("Imagenes subidas!");
       // Limpiar el formulario
       $("#formularioResena")[0].reset();
      // Desactivar todas las estrellas y restablecer el color del borde
       $("input[type='radio']").prop('checked', false).css('border-color', '');
        }
        else if(imagenes.length >5){
            $("#preview").empty().text("Demasiadas imagenes. Solo 5.");
        }
        else{
            contenidoPublicaciones.append(divPublicacion);
            if (contadorDivs >5) {
                divPublicacion.hide();
            }
            $("#preview").empty()
            // Limpiar el formulario
            $("#formularioResena")[0].reset();
            // Desactivar todas las estrellas y restablecer el color del borde
          $("input[type='radio']").prop('checked', false).css('border-color', '');
        }
    // Agregar botón para mostrar más reseñas si hay más de 5 reseñas
    if (contadorDivs > 5 && $(".mostrar-mas").length === 0) {
        var botonMostrarMas = $("<button>").text("Mostrar más reseñas").addClass("mostrar-mas");

        // Manejar clic en el botón para mostrar más reseñas ocultas
        botonMostrarMas.click(function() {
            $(".resena:hidden").show();
            $(this).remove(); // Eliminar el botón una vez que se han mostrado todas las reseñas ocultas
        });

        // Agregar el botón al final de las reseñas
        contenidoPublicaciones.append(botonMostrarMas);

        
        }
  
  
  });

    
 });
