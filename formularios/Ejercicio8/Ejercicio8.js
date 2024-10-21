function convertirCelsiusAFahrenheit() {
    let celsius = parseFloat(document.fdatos.entradaC.value);
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultado").innerText = fahrenheit;
}

function convertirFahrenheitACelsius() {
    let fahrenheit = parseFloat(document.fdatos.entradaF.value);
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("resultado").innerText = celsius;
}
