//1/3: manejar frutas
function frutas() {
    let frutas = [];
    let continuar = true;

    while (continuar) {
        let fruta = prompt("Ingresa el nombre de una fruta (o presiona cancelar para finalizar):");
        if (fruta) {
            frutas.push(fruta);
        } else {
            continuar = false;
        }
    }

    alert("Las frutas ingresadas son: " + frutas.join(", "));
}

//2/3: manejar calificaciones
function calificaciones() {
    let calificaciones = [];
    let continuar = true;

    while (continuar) {
        let calificacion = prompt("Ingresa una calificación (o presiona cancelar para finalizar):");
        if (calificacion) {
            calificaciones.push(parseFloat(calificacion));
        } else {
            continuar = false;
        }
    }

    let suma = calificaciones.reduce((total, num) => total + num, 0);
    let promedio = suma / calificaciones.length;

    alert("El promedio de las calificaciones es: " + promedio.toFixed(2));
}

//3/3: manejar números
function numeros() {
    let numeros = [5, 10, 15]; // vzalores iniciales
    let continuar = true;

    while (continuar) {
        let numero = prompt("Ingresa un número (o presiona cancelar para finalizar):");
        if (numero) {
            numeros.push(parseFloat(numero));
        } else {
            continuar = false;
        }
    }

    let suma = numeros.reduce((total, num) => total + num, 0);

    alert("Los números ingresados son: " + numeros.join(", ") + "\nLa suma total es: " + suma);
}
