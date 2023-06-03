var puntaje = 0;
var intento = 0;

const opcionIncorrecta = () => {
    intento += 1;
    mostrarVals()

    document.getElementById("mensajeEleccion").innerHTML = "Pokemon incorrecto, intentalo nuevamente";
    document.getElementById("mensajeEleccion").style = "border: 2px solid black";

    if (intento >= 3) {
        reiniciar();
    }
}

const opcionCorrecta = () => {
    intento += 1;
    if (intento == 1) {
        puntaje += 5;
    } else if (intento == 2) {
        puntaje += 3;
    } else if (intento == 3) {
        puntaje += 1;
    }
    if (intento != 4) {
        document.getElementById("mensajeEleccion").innerHTML = "Felicitaciones, has seleccionado la opción correcta";
        document.getElementById("mensajeEleccion").style = "border: 2px solid black";
        mostrarVals()
        document.getElementById("imagenInicial").src = "../img/pcolor.jpg";
    }


}

const mostrarVals = () => {
    document.getElementById("puntajeNum").innerHTML = "<strong>Puntaje: " + puntaje.toString() + "</strong>";
    document.getElementById("intentosNum").innerHTML = "<strong>Intento: " + intento.toString() + "</strong>";
}

const reiniciar = () => {
    puntaje = 0;
    intento = 0;
    mostrarVals()
    document.getElementById("mensajeEleccion").innerHTML = "";
    document.getElementById("imagenInicial").src = "../img/pnegro.jpg";
    document.getElementById("mensajeEleccion").style = "border:0";

}