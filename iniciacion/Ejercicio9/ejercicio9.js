let dato, num; 

dato = window.prompt("introduce un numero ?","0");
num = parseInt(dato);

let resultado = num *  2; 
document.getElementById("salida").innerHTML = (`El doble es ${resultado} `);
