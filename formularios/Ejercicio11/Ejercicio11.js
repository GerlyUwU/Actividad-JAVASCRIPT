function pesoreferencia() {
    let altura = parseInt(document.fdatos.altura.value);
    let edad = parseInt(document.fdatos.edad.value);
    let sexo = document.fdatos.sexo.value.toLowerCase();
    let peso;

    if (sexo === 'h') {
        peso = 50 + ((altura - 150) / 4) * 3 + (edad - 20) / 4;
    } else {
        peso = 50 + ((altura - 150) / 4) * 3 + (edad - 20) / 4 * 0.9;
    }

    document.getElementById("resultado").innerText = peso.toFixed(2);
}
