/**
 * Ejercicio Condicionales 14
 * Programa donde el usuario introduce el número de un mes (1-12)
 * y el código responde si ese mes tiene 30 o 31 días.
 */

let numeroMes = parseInt(prompt("Introduce el número del mes (1-12):", "1"));
let dias;

// Verificar el número del mes y determinar la cantidad de días
if (numeroMes === 4 || numeroMes === 6 || numeroMes === 9 || numeroMes === 11) {
    dias = 30;  // Abril, Junio, Septiembre, Noviembre tienen 30 días
} else if (numeroMes === 1 || numeroMes === 3 || numeroMes === 5 || numeroMes === 7 || numeroMes === 8 || numeroMes === 10 || numeroMes === 12) {
    dias = 31;  // Enero, Marzo, Mayo, Julio, Agosto, Octubre, Diciembre tienen 31 días
} else if (numeroMes === 2) {
    dias = "28 o 29";  // Febrero tiene 28 o 29 días dependiendo del año
} else {
    dias = "Número de mes no válido";  // Para cualquier número fuera del rango 1-12
}

// Mostrar el resultado
document.write(`<h3>El mes ${numeroMes} tiene ${dias} días.</h3>`);
