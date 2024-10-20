function calcularResta() {
    // Pedir los dos números al usuario usando prompt
    let numero1 = prompt("Introduce el primer número:");
    let numero2 = prompt("Introduce el segundo número:");

    // Convertir los valores a número, ya que prompt devuelve cadenas
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    // Verificar que ambos valores sean números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, introduce valores numéricos válidos.");
    } else {
        // Realizar la resta
        let resultado = numero1 - numero2;

        // Mostrar el resultado usando alert
        alert(`El resultado de la resta es: ${resultado}`);
    }
}
