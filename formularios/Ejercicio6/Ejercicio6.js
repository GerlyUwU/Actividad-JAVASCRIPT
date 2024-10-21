function calcula() {
    let numero = parseFloat(document.fdatos.entrada.value);
    let lista = document.getElementById("lista");
    let valor = parseFloat(lista.options[lista.selectedIndex].value);
    let resultado = numero * valor;
    document.getElementById("salida").innerText = resultado;
}
