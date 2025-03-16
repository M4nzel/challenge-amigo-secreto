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

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    // Iterar sobre el array amigos y agregar cada nombre como <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar <li> a la lista
    }
}



