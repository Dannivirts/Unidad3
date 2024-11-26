const Horario = {
    materias: [
        { nombre: "Fund. Telecom.", grupo: "B", horario: "Lun-Vie 14:00-15:00 Aula:F5" },
        { nombre: "Lenguajes y Autómatas I", grupo: "B", horario: "Lun-Vie 18:00-19:00 Aula:F5" },
        { nombre: "Fund. Ing. de SW", grupo: "B", horario: "Lun-Vie 16:00-17:00 Aula:F5" },
        { nombre: "Sistemas Operativos", grupo: "B", horario: "Lun-Vie 15:00-16:00 Aula:F3" },
        { nombre: "Arq. de Comput.", grupo: "B", horario: "Lun-Vie 13:00-14:00 Aula:E1" },
        { nombre: "Taller de B.D.", grupo: "B", horario: "Lun-Vie 19:00-20:00 Aula:S1" },
        { nombre: "Programación Web", grupo: "B", horario: "Lun-Vie 17:00-18:00 Aula:S2" },
        { nombre: "Estudiantina", grupo: "A", horario: "Jue 16:00-18:00 Gim" },
    ],
    imprimirHorario: function () {
        let horarioCompleto = "Horario del Semestre:\n";
        this.materias.forEach((materia, index) => {
            horarioCompleto += `${index + 1}. ${materia.nombre} (${materia.grupo}) - ${materia.horario}\n`;
        });
        return horarioCompleto;
    }
};

document.getElementById("ejecutar-objeto").addEventListener("click", () => {
    const confirmar = confirm("¿Deseas ejecutar el objeto y mostrar el horario?");
    if (confirmar) {
        document.getElementById("resultado").textContent = Horario.imprimirHorario();
    } else {
        alert("Has decidido no ejecutar el objeto.");
    }
});
