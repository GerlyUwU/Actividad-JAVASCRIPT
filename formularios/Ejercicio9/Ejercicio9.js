function calculaNotaPonderada() {
    let nota1 = parseFloat(document.fdatos.nota1.value);
    let pond1 = parseFloat(document.fdatos.pond1.value);
    let nota2 = parseFloat(document.fdatos.nota2.value);
    let pond2 = parseFloat(document.fdatos.pond2.value);

    let ponderada = (nota1 * pond1 + nota2 * pond2) / (pond1 + pond2);
    document.getElementById("resultado").innerText = ponderada;
}
