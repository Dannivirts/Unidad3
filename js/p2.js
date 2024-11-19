let confirmacion = prompt("¿Son correctos los datos ingresados? (Escribe 'si' o 'no')");

if (confirmacion.toLowerCase() === "si") {
    alert(`Registro guardado correctamente: 
    Nombre: ${nombre}, 
    Edad: ${edad}, 
    País: ${pais}`);
} else {
    alert("Registros borrados");
}