// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("amigo");
    const button = document.querySelector(".button-add");
    const sorteoButton = document.querySelector(".button-draw");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    let amigos = [];  // Lista de amigos
    let asignaciones = new Map(); // Guarda quién regala a quién

    function agregarAmigo() {
        const nombre = input.value.trim();

        if (nombre === "") {
            alert("Por favor, ingresa un nombre.");
            return;
        }

        if (amigos.includes(nombre)) {
            alert("Este nombre ya fue agregado.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        mostrarUltimoAgregado(nombre);

        input.value = ""; 
        input.focus(); 
    }

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }

    function mostrarUltimoAgregado(nombre) {
        resultado.innerHTML = ""; // Limpia la notificación anterior
        const li = document.createElement("li");
        li.textContent = `Último amigo agregado: ${nombre}`;
        resultado.appendChild(li);
    }

    function sortearAmigo() {
        if (amigos.length < 2) {
            alert("Debe haber al menos 2 personas para sortear.");
            return;
        }

        // Crear una copia de la lista para hacer las asignaciones
        let disponiblesParaRegalar = [...amigos];
        let disponiblesParaRecibir = [...amigos];

        asignaciones.clear(); // Limpiar asignaciones previas

        while (disponiblesParaRegalar.length > 0) {
            let indexPersona = Math.floor(Math.random() * disponiblesParaRegalar.length);
            let persona = disponiblesParaRegalar[indexPersona];

            let posiblesAmigos = disponiblesParaRecibir.filter(a => a !== persona);
            if (posiblesAmigos.length === 0) {
                alert("Hubo un problema con el sorteo. Se reiniciará.");
                return sortearAmigo(); // Reiniciar si hay un error
            }

            let indexAmigo = Math.floor(Math.random() * posiblesAmigos.length);
            let amigoSecreto = posiblesAmigos[indexAmigo];

            asignaciones.set(persona, amigoSecreto);

            // Eliminar del sorteo
            disponiblesParaRegalar = disponiblesParaRegalar.filter(a => a !== persona);
            disponiblesParaRecibir = disponiblesParaRecibir.filter(a => a !== amigoSecreto);
        }

        // Mostrar los resultados
        resultado.innerHTML = "";
        asignaciones.forEach((amigoSecreto, persona) => {
            const li = document.createElement("li");
            li.textContent = `${persona} le regala a ${amigoSecreto}`;
            resultado.appendChild(li);
        });

        // Reiniciar lista porque ya todos tienen su amigo secreto
        amigos = [];
        actualizarLista();
    }

    button.addEventListener("click", agregarAmigo);
    
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    });

    sorteoButton.addEventListener("click", sortearAmigo);
});
