

 let numero1 = parseInt(window.prompt("Primer número?", "0"));
        let numero2 = parseInt(window.prompt("Segundo número?", "0"));
        let resultado;

        if (numero1 === numero2) {
            resultado = "iguales";
        } else if (numero1 > numero2) {
            resultado = "el primero";
        } else {
            resultado = "el segundo";
        }

        document.write(`<h3>El mayor es ${resultado}</h3>`);