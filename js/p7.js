 // Seleccionar el menú y botones
 const menu = document.querySelector('#menu');
 const removeFirstButton = document.querySelector('#removeFirst');
 const addLinkButton = document.querySelector('#addLink');

 // Función para eliminar el primer elemento
 removeFirstButton.addEventListener('click', () => {
   if (menu.children.length > 0) {
     menu.children[0].remove();
   } else {
     alert('No hay más elementos para eliminar.');
   }
 });

 // Función para agregar un nuevo enlace
 addLinkButton.addEventListener('click', () => {
   const movieName = prompt('Introduce el nombre de tu película favorita:');
   if (movieName) {
     const movieLink = prompt('Introduce el enlace a la película:');
     if (movieLink) {
       // Crear un nuevo elemento <li> con un enlace <a>
       const newLi = document.createElement('li');
       const newAnchor = document.createElement('a');
       newAnchor.href = movieLink;
       newAnchor.textContent = movieName;
       newAnchor.target = '_blank'; // Abre el enlace en una nueva pestaña
       newLi.appendChild(newAnchor);
       menu.appendChild(newLi);
     } else {
       alert('Debes proporcionar un enlace.');
     }
   } else {
     alert('Debes proporcionar un nombre de película.');
   }
 });