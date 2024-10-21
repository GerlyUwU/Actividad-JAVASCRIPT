let pasaraFarenheit = (grado) => {
    return grado * 1.8 + 32;
};

let pasaraCelsius = (farenheit) => {
    return (farenheit - 32) / 1.8;
};

var result = pasaraFarenheit(22);
alert(result);

result = pasaraCelsius(72);
alert(result);
