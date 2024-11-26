const CalculoCalificaciones = {
    materias: [
        "Fund. Telecom.",
        "Lenguajes y Autómatas I",
        "Fund. Ing. de SW",
        "Sistemas Operativos",
        "Arq. de Comput.",
        "Taller de B.D.",
        "Programación Web",
        "Estudiantina"
    ],
    calificaciones: [],

    pedirCalificaciones: function () {
        this.calificaciones = []; 
        for (let i = 0; i < this.materias.length; i++) {
            const calificacion = parseFloat(
                prompt(`Ingresa la calificación para ${this.materias[i]}:`)
            );
            if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
                alert("Por favor, ingresa un número válido entre 0 y 100.");
                i--; 
            } else {
                this.calificaciones.push(calificacion);
            }
        }
    },

    calcularSuma: function () {
        return this.calificaciones.reduce((a, b) => a + b, 0);
    },

    calcularPromedio: function () {
        const suma = this.calcularSuma();
        return (suma / this.calificaciones.length).toFixed(2);
    },


    mostrarResultados: function () {
        const suma = this.calcularSuma();
        const promedio = this.calcularPromedio();
        alert(`Resultados:\nSuma de calificaciones: ${suma}\nPromedio de calificaciones: ${promedio}`);
    }
};

document.getElementById("calificaciones-btn").addEventListener("click", () => {
    if (confirm("¿Deseas ingresar las calificaciones para las materias?")) {
        CalculoCalificaciones.pedirCalificaciones();
        CalculoCalificaciones.mostrarResultados();
    } else {
        alert("Has decidido no ingresar las calificaciones.");
    }
});
