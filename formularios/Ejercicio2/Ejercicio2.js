function calculaPorcentaje() {
    let valor = parseFloat(document.fdatos.entrada.value);
    let porcentaje = valor * 0.10;
    document.getElementById("resultado").innerText = porcentaje;
}
