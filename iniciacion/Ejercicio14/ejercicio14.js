var num=0,contador=0; 
while(num !== 7){
    num = parseInt(window.prompt("introduce cualquier numero ","0"));
    alert("ingresaste el numero "+num);
    contador++;
}
document.write("has introducido el 7 en el intento numero: "+contador);

