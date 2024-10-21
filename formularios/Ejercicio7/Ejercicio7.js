function convertirCelsiusAFahrenheit() {
    let celsius = parseFloat(document.fdatos.entrada.value);
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultado").innerText = fahrenheit;
}
