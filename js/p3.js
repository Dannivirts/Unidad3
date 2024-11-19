function bienvenidaYRecoleccion() {
    alert("¡Bienvenido al programa!");
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let actividad = prompt("¿Cuál es tu actividad favorita?");
    return { nombre, actividad }; 
}

function confirmarDatos(nombre, actividad) {
    return confirm(`¿Son correctos estos datos? 
    Nombre: ${nombre} 
    Actividad favorita: ${actividad}`);
}

function mostrarMensajeFinal(confirmado, nombre, actividad) {
    if (confirmado) {
        alert(`¡Registro completado! 
        Nombre: ${nombre}, 
        Actividad favorita: ${actividad}`);
    } else {
        alert("Registro cancelado. Inténtalo nuevamente.");
    }
}


function despedida() {
    alert("Gracias por usar el programa. ¡Hasta pronto!");
}


function iniciarPrograma() {
    const datos = bienvenidaYRecoleccion(); 
    const confirmado = confirmarDatos(datos.nombre, datos.actividad); 
    mostrarMensajeFinal(confirmado, datos.nombre, datos.actividad); 
    despedida(); 
}


iniciarPrograma();

