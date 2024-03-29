$(document).ready(function() {
    $("#estrella5").change(function() {
      if ($(this).is(":checked")) {
        $("input[type='radio']").prop('checked', false).css('border-color', 'yellow');
      }
      
    });
  
    $("#estrella4").change(function() {
      if ($(this).is(":checked")) {
        $("input[type='radio']").prop('checked', false).css('border-color', ''); // Desactiva todos los radio buttons y restablece el color del borde
        $("#estrella4").prop('checked', true).css('border-color', 'yellow'); // Activa los radio buttons estrella1 a estrella4 y cambia su color de borde a amarillo
      }
    });

    $("#estrella3").change(function() {
        if ($(this).is(":checked")) {
          $("input[type='radio']").prop('checked', false).css('border-color', ''); // Desactiva todos los radio buttons y restablece el color del borde
          $("#estrella1, #estrella2, #estrella3").prop('checked', true).css('border-color', 'yellow'); // Activa los radio buttons estrella1 a estrella4 y cambia su color de borde a amarillo
        }
    });

    $("#estrella2").change(function() {
        if ($(this).is(":checked")) {
          $("input[type='radio']").prop('checked', false).css('border-color', ''); // Desactiva todos los radio buttons y restablece el color del borde
          $("#estrella1, #estrella2").prop('checked', true).css('border-color', 'yellow'); // Activa los radio buttons estrella1 a estrella4 y cambia su color de borde a amarillo
        }
    });

    $("#estrella1").change(function() {
        if ($(this).is(":checked")) {
          $("input[type='radio']").prop('checked', false).css('border-color', ''); // Desactiva todos los radio buttons y restablece el color del borde
          $("#estrella1").prop('checked', true).css('border-color', 'yellow'); // Activa los radio buttons estrella1 a estrella4 y cambia su color de borde a amarillo
        }
    });

    // Función para publicar una reseña
    $("#formularioReseña").submit(function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario de forma predeterminada

        var contenidoPublicaciones = $("#contenidoXML");
        // Comprobar si el div tiene hijos al cargar la página
        if ($('#contenidoXML').children().length == 0) {
            var divTitulo = $("<div>").html("<h2>Reseñas Publicadas</h2>");
            contenidoPublicaciones.append(divTitulo);
         }
        // Obtener los valores del formulario
        var valoracion = $("input[name='valoracion']:checked").val();
        var nombre = $("#nombre").val();
        var texto = $("#text").val();

        var divPublicacion = $("<div>").addClass("resena").html("<h3>" + nombre + "</h3><p class=\"textoResenas\">Valoración: " + valoracion + "</p><p class=\"textoResenas\">" + texto + "</p>");
        contenidoPublicaciones.append(divPublicacion);
        // Limpiar el formulario
        $("#formularioReseña")[0].reset();
        });
        
 });
