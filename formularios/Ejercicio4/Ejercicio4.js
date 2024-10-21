function calcular() {
    let numero = parseFloat(document.fdatos.numero.value);
    document.getElementById("cuadrado").innerText = numero ** 2;
    document.getElementById("cubo").innerText = numero ** 3;
}
