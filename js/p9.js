//l de personas inicial
let personas = [
    { nombre: 'Hector', edad: 28 },
    { nombre: 'Alan', edad: 20 },
    { nombre: 'Luis Carlos', edad: 35 },
  ];
  
  //al cargar la página, genera la lista en el html
  document.addEventListener('DOMContentLoaded', actualizarLista);
  
  // Función para extraer nombres de la lista
  function extraerNombres() {
    const nombres = personas.map(persona => persona.nombre);
    document.getElementById('resultadoNombres').textContent =
      `Nombres extraídos: ${nombres.join(', ')}`;
  }
  
  //fuuncion para agregar una nueva persona
  function agregarPersona() {
    const nombre = prompt('Introduce el nombre de la persona:');
    const edad = prompt('Introduce la edad de la persona:');
  
    if (nombre && edad && !isNaN(edad)) {
      personas.push({ nombre, edad: parseInt(edad) });
      actualizarLista();
    } else {
      alert('Por favor, introduce datos válidos.');
    }
  }
  
  //fuuncion para actualizar la lista en el html
  function actualizarLista() {
    const listaPersonas = document.getElementById('listaPersonas');
    listaPersonas.innerHTML = ''; //liimpiar la lista existente
  
    personas.forEach(persona => {
      const li = document.createElement('li');
      li.textContent = `Nombre: ${persona.nombre}, Edad: ${persona.edad}`;
      listaPersonas.appendChild(li);
    });
  }
  