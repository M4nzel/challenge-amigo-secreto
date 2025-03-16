// Array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del input
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); // Elimina espacios en blanco al inicio y al final

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Sale de la función si el nombre está vacío
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista en el HTML
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}


