function inic() {
    document.game.dinero.value = 100;
}

function calc() {
    let Din = parseInt(document.game.dinero.value);
    let Num = document.game.num.value;
    let Apu = parseInt(document.game.apuesta.value);
    let dado = Math.floor(Math.random() * 6) + 1;
    let ganancia = 0;

    if (Din > 0) {
        if (Num == dado) {
            document.game.dado.value = dado;
            document.game.res.value = "Has ganado! " + Apu * 2;
            ganancia = Din + Apu * 2;
        } else {
            document.game.dado.value = dado;
            document.game.res.value = "Has perdido! " + Apu;
            ganancia = Din - Apu;
        }
        document.game.dinero.value = ganancia;
    } else {
        alert("Has perdido todo tu dinero!");
    }
}
