function getEventTime() {
    let start = new Date(document.getElementById("start").value);
    let end = new Date(document.getElementById("end").value);
    let diferencia = (end - start) / (1000 * 60 * 60 * 24);  // Convertir milisegundos a días
    document.getElementById("dias").innerText = diferencia;
}
