// Función para abrir la carta cuando se hace clic en el sobre
function abrirCarta() {
    document.getElementById("sobre").classList.add("oculto"); // Oculta el sobre
    document.getElementById("carta").classList.remove("oculto"); // Muestra la carta con la pregunta
}

// Función cuando se presiona "Sí ❤️"
function respuestaSi() {
    document.getElementById("carta").classList.add("oculto"); // Oculta la carta
    document.getElementById("mensaje").classList.remove("oculto"); // Muestra el mensaje final
}

// Función para evitar que se presione "No 💔"
function moverBoton() {
    let btnNo = document.getElementById("btnNo");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    btnNo.style.position = "absolute";
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}

// Función si se logra presionar "No" (pero lo evitamos 😆)
function respuestaNo() {
    alert("¡No puedes decir que no! 😆");
}
