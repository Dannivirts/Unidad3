 // Función flecha para sumar dos números
 const suma = (a, b) => a + b;

 function calcularSuma() {
   const num1 = parseFloat(document.getElementById('num1').value);
   const num2 = parseFloat(document.getElementById('num2').value);
   if (!isNaN(num1) && !isNaN(num2)) {
     document.getElementById('resultadoSuma').textContent = `La suma es: ${suma(num1, num2)}`;
   } else {
     document.getElementById('resultadoSuma').textContent = 'Por favor, introduce números válidos.';
   }
 }

 // Función flecha para verificar si un número es par
 const esPar = num => num % 2 === 0;

 function verificarSiEsPar() {
   const numero = parseInt(document.getElementById('numeroPar').value);
   if (!isNaN(numero)) {
     document.getElementById('resultadoPar').textContent = 
       esPar(numero) ? `${numero} es par` : `${numero} es impar`;
   } else {
     document.getElementById('resultadoPar').textContent = 'Introduce un número válido.';
   }
 }