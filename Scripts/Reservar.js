

// Verificamos que los campos del formulario de reservas.html no estén vacios,
// que la fecha y la hora sea mayor o igual a la fecha actual,
// el numero de telefono sea de 9 digitos y que el numero de personas sea mayor a 0.
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    // Obtener los campos del formulario de reservas.html
    const fecha = document.getElementById("fecha").value; // Obtén la fecha del formulario
    const hora = document.getElementById("hora").value; // Obtén la hora del formulario
    const telefono = document.getElementById("telefono").value; // Obtén el número de teléfono del formulario
    const personas = document.getElementById("personas").value; // Obtén el número de personas del formulario

    // Verificar que los campos no estén vacíos
    if (fecha.trim() === '' || hora.trim() === '' || telefono.trim() === '' || personas.trim() === '') {
        document.getElementsByTagName("p1")[0].innerHTML = "Por favor, completa todos los campos del formulario.";
        document.getElementsByTagName("p1")[0].style.color = "red";
        return;
    }

    // Verificar que la fecha y la hora sean mayores o iguales a la fecha actual
    const fechaActual = new Date();
    const fechaSeleccionada = new Date(fecha + 'T' + hora);
    if (fechaSeleccionada < fechaActual) {
        document.getElementsByTagName("p1")[0].innerHTML = "La fecha y hora seleccionadas deben ser mayores o iguales a la fecha actual.";
        document.getElementsByTagName("p1")[0].style.color = "red";
        return;
    }

    // Verificar que el número de teléfono tenga 9 dígitos
    if (telefono.length !== 9) {
        document.getElementsByTagName("p1")[0].innerHTML = "El número de teléfono debe tener 9 dígitos.";
        document.getElementsByTagName("p1")[0].style.color = "red";
        return;
    }

    // Verificar que el número de personas sea mayor a 0
    if (parseInt(personas) <= 0) {
        document.getElementsByTagName("p1")[0].innerHTML = "El número de personas debe ser mayor a 0.";
        document.getElementsByTagName("p1")[0].style.color = "red";
        return;
    }

    // Si se cumple todas las condiciones anteriores, se verifica si la hora 
    // seleccionada está dentro del horario de atención del restaurante
    // (Lunes - Sábados: 12:45 - 16:00
    // Lunes - Sábados: 20:30 - 00:00
    // Domingos: Cerrado)
    const diaSemana = fechaSeleccionada.getDay();
    const horaSeleccionada = fechaSeleccionada.getHours();

    // Verificar si el día seleccionado es domingo
    if (diaSemana === 0) {
        document.getElementsByTagName("p1")[0].innerHTML = "El restaurante está cerrado los domingos.";
        document.getElementsByTagName("p1")[0].style.color = "red";
        return;
    }
    
    // Verificar si la hora seleccionada está dentro del horario de atención del restaurante
    else if (diaSemana >= 1 && diaSemana <= 6) {
        if (!((horaSeleccionada >= 12 && horaSeleccionada < 16) || (horaSeleccionada >= 20 && horaSeleccionada < 24))) {
            document.getElementsByTagName("p1")[0].innerHTML = "El restaurante está cerrado a esa hora.";
            document.getElementsByTagName("p1")[0].style.color = "red";
            return;
        }
    }

    // Verificar si la hora seleccionada está ocupada en la misma fecha

   fetch('./../Datos/Reservas.json')
    .then(response => response.json())
    .then(data => {
        // Obtener los campos del formulario de reservas.html
        const fecha = document.getElementById("fecha").value; // Obtén la fecha del formulario
        const hora = document.getElementById("hora").value; // Obtén la hora del formulario
        // Verificar si la hora está ocupada en la misma fecha
        const horaOcupada = data.some(reserva => {
            if (reserva.Date == fecha) {
                var fecha1 = new Date(reserva.Date + 'T' + reserva.Hour);
                var fecha2 = new Date(fecha + 'T' + hora);
                let tiempoDiferencia = fecha2.getTime() - fecha1.getTime();
                let minutosDiferencia = Math.abs(Math.floor(tiempoDiferencia / (1000 * 60)));
                return minutosDiferencia <= 30;
            }
        });

        if (horaOcupada) {
            document.getElementsByTagName("p1")[0].innerHTML = "La hora seleccionada está ocupada en la misma fecha.";
            document.getElementsByTagName("p1")[0].style.color = "red";
        } else {
            document.getElementsByTagName("p1")[0].innerHTML = "Datos enviados correctamente, en breve le contactaremos";
            document.getElementsByTagName("p1")[0].style.color = "green";
        }
    })
    .catch(error => {
        console.error('Error al leer el archivo JSON:', error);
    });

});