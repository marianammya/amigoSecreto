// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Agregar el amigo a la lista
    amigos.push(nombreAmigo);
    inputAmigo.value = ""; // Limpiar el campo de entrada
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para sortear.");
        return;
    }

    const amigosSorteados = [...amigos]; // Copiar la lista de amigos
    const resultados = {};

    // Mezclar la lista de amigos
    amigosSorteados.sort(() => Math.random() - 0.5);

    // Asignar amigos secretos
    for (let i = 0; i < amigos.length; i++) {
        resultados[amigos[i]] = amigosSorteados[i === amigos.length - 1 ? 0 : i + 1];
    }

    mostrarResultados(resultados);
}

// Función para mostrar los resultados del sorteo
function mostrarResultados(resultados) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ""; // Limpiar resultados anteriores

    for (const amigo in resultados) {
        const li = document.createElement('li');
        li.textContent = `${amigo} -> ${resultados[amigo]}`;
        resultadoDiv.appendChild(li);
    }
}