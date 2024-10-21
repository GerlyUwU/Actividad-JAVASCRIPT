/**
 * Ejercicio Condicionales 11 - Agencia de viajes
 * Algoritmo estructurado para calcular descuentos dependiendo del origen y destino.
 * Si el origen es Palma y el destino es Barcelona, Madrid o Valencia, se establece un descuento.
 */

// Solicitar el origen y destino al usuario
let origen = prompt("Introduce la ciudad de origen:", "").toLowerCase();
let destino = prompt("Introduce la ciudad de destino:", "").toLowerCase();
let descuento = 0;

// Verificar si el origen es "palma"
if (origen === "palma") {
    // Verificar el destino y asignar el descuento correspondiente
    if (destino === "barcelona") {
        descuento = 5;
    } else if (destino === "madrid") {
        descuento = 10;
    } else if (destino === "valencia") {
        descuento = 15;
    }
}

// Mostrar el descuento si aplica o un mensaje si no hay descuento
if (descuento > 0) {
    document.write(`<h3>Su descuento es del ${descuento}%</h3>`);
} else {
    document.write(`<h3>No hay descuento para el origen y destino seleccionados.</h3>`);
}
