document.addEventListener("DOMContentLoaded", function () {
    let inputAmigo = document.getElementById("amigo");
    let btnAgregar = document.querySelector(".button-add");

    // Agregar evento para capturar Enter y agregar el nombre
    inputAmigo.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita el envío del formulario por defecto
            agregarAmigo();
        }
    });

    // Cambiar color del botón según si hay texto en el input
    inputAmigo.addEventListener("input", actualizarColorBoton);

    function actualizarColorBoton() {
        if (inputAmigo.value.trim() !== "") {
            btnAgregar.style.backgroundColor = "#4CAF50"; // Verde
            btnAgregar.style.color = "#ffffff"; // Texto blanco
        } else {
            btnAgregar.style.backgroundColor = "#ccc"; // Gris
            btnAgregar.style.color = "#000000"; // Texto negro
        }
    }
});

// Array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del input
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); // Elimina espacios en blanco al inicio y al final
    let btnAgregar = document.querySelector(".button-add");

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
    setTimeout(() => {
        btnAgregar.style.backgroundColor = "#ccc"; // Gris
        btnAgregar.style.color = "#000000"; // Texto negro
    }, 10);
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

function sortearAmigo () {
    // Obtener el elemento donde se mostrará el resultado
    let resultado = document.getElementById("resultado");

    // Validar que haya al menos un amigo en la lista 
    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo antes de sortear");
        return;
    }

    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la lista de resultados
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}




