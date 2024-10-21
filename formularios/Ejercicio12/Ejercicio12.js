function pesoreferencia() {
    let altura = parseInt(document.fdatos.altura.value);
    let edad = parseInt(document.fdatos.edad.value);
    let sexo = document.fdatos.sexo.value.toLowerCase();
    let pesoReferencia;

    if (sexo === 'h') {
        // Fórmula para hombres
        pesoReferencia = 50 + ((altura - 150) / 4) * 3 + (edad - 20) / 4;
    } else if (sexo === 'm') {
        // Fórmula para mujeres
        pesoReferencia = 50 + ((altura - 150) / 4) * 3 + (edad - 20) / 4 * 0.9;
    } else {
        document.getElementById("resultado").innerText = "Sexo no válido. Debe ser H o M.";
        return;
    }

    document.getElementById("resultado").innerText = pesoReferencia.toFixed(2);
}
