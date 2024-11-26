// Selecciona el botón y el contenedor grid
const boton = document.getElementById('cambiarEstilo');
const bentoGrid = document.getElementById('bentoGrid');

// Función que aplica los nuevos estilos
function cambiarEstilo() {
    // Cambiar el fondo de la grid
    bentoGrid.style.backgroundColor = '#1e1e2f';
    bentoGrid.style.borderRadius = '15px';
    bentoGrid.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    bentoGrid.style.padding = '2rem';

    // Modificar los elementos internos
    const elementos = bentoGrid.children;
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = '#9d4edd'; // Fondo morado
        elementos[i].style.color = '#ffffff'; // Texto blanco
        elementos[i].style.fontSize = '1.5rem'; // Tamaño del texto
        elementos[i].style.borderRadius = '10px'; // Bordes redondeados
        elementos[i].style.padding = '1rem';
        elementos[i].style.transition = 'all 0.3s ease'; // Animación
    }
}

// Agregar evento al botón
boton.addEventListener('click', cambiarEstilo);
