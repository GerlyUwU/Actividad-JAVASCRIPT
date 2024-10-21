/**
 * Ejercicio Condicionales 10
 * Introducción de la edad del usuario y validación de rango.
 * No se permiten edades menores a 1 año ni mayores a 120 años.
 */

let edad = parseInt(prompt("Introduce tu edad:", "0"));

if (edad >= 1 && edad <= 120) {
    if (edad > 18) {
        document.write("<h3>Sí tiene permiso de acceso</h3>");
    } else {
        document.write("<h3>No tiene permiso de acceso</h3>");
    }
} else {
    document.write("<h3>Edad no válida. Debe estar entre 1 y 120 años.</h3>");
}
