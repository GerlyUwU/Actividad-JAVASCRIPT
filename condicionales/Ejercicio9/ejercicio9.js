/**
 * Ejercicio Condicionales 9 - Optimizado
 * 
 * Se realiza la optimización del código, estructurando las condiciones anidadas
 * para reducir el número de comparaciones innecesarias.
 */

let marca = prompt("Marca?", "0");
let modelo = prompt("Modelo?", "0");
let descuento = 0;

// Verificar la marca primero
if (marca === "ford") {
    // Solo si la marca es "ford" se verifica el modelo
    if (modelo === "fiesta") {
        descuento = 5;
    } else {
        descuento = 10;
    }
}

// Mostrar el resultado
document.write(`<h3>Su descuento es ${descuento}%</h3>`);
