let dato1, dato2, num1, num2; 

dato1 = window.prompt("introduce el primer numero ?","0");
num1 = parseInt(dato1);

dato2 = window.prompt("ingrese el segundo numero ? ","0");
num2 = parseInt(dato2);

let resultado = num1 + num2;
document.write(`<br/ <br/> La suma es: ${resultado} `);
