// Seleccionar el botón y el contenedor
const botonCambiarEstilo = document.getElementById('changeStyleButton');
const contenedorBento = document.getElementById('bentoGrid');

// Variable para rastrear el estado actual
let estiloPersonalizado = false;

// Función para cambiar los estilos
function cambiarEstiloBento() {
    if (!estiloPersonalizado) {
        // Aplicar estilos personalizados
        contenedorBento.style.backgroundColor = '#1e1e2f';
        contenedorBento.style.padding = '2rem';
        contenedorBento.style.borderRadius = '15px';
        contenedorBento.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';

        // Cambiar estilo de los elementos individuales
        const elementosGrid = contenedorBento.querySelectorAll('.grid');
        elementosGrid.forEach(elemento => {
            elemento.style.backgroundColor = '#9d4edd';
            elemento.style.color = '#ffffff';
            elemento.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
            elemento.style.fontSize = '1.2rem';
            elemento.style.borderRadius = '10px';
            elemento.style.padding = '1rem';
            elemento.style.transition = 'all 0.3s ease';
        });
    } else {
        // Restaurar estilos originales
        contenedorBento.style.backgroundColor = '';
        contenedorBento.style.padding = '';
        contenedorBento.style.borderRadius = '';
        contenedorBento.style.boxShadow = '';

        // Restaurar estilo de los elementos individuales
        const elementosGrid = contenedorBento.querySelectorAll('.grid');
        elementosGrid.forEach(elemento => {
            elemento.style.backgroundColor = '';
            elemento.style.color = '';
            elemento.style.fontFamily = '';
            elemento.style.fontSize = '';
            elemento.style.borderRadius = '';
            elemento.style.padding = '';
        });
    }

    // Alternar el estado
    estiloPersonalizado = !estiloPersonalizado;
}

// Asignar evento al botón
botonCambiarEstilo.addEventListener('click', cambiarEstiloBento);
