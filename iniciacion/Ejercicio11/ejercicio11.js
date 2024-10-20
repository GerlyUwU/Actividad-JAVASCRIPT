// Solicitar los dos números al usuario
let dato1 = prompt('Introduce el primer número:', '');
let dato2 = prompt('Introduce el segundo número:', '');

// Convertir los valores a números
let num1 = parseInt(dato1);
let num2 = parseInt(dato2);

// Realizar las operaciones
let resta = num1 - num2;
let multiplicacion = num1 * num2;

// Mostrar los resultados en pantalla
document.write(`El resultado de la resta es: ${resta} <br>`);
document.write(`El resultado de la multiplicación es: ${multiplicacion} <br>`);
