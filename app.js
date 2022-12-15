var elementoa;
var elmeentob;
var operacion;

function init(){
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var raiz = document.getElementById("raiz");
    var potencia = document.getElementById("potencia");
    var residuo = document.getElementById("residuo");
    var division = document.getElementById("division");
    var multiplicacion = document.getElementById("multiplicacion");
    var resta = document.getElementById("resta");
    var suma = document.getElementById("suma");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        elmentoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        elmentoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        elmentoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    /*division.onclick = function(e){
        elmentoa = resultado.textContent;
        operacion = "/";
        limpiar();
    } */
    residuo.onclick = function(e){
        elmentoa = resultado.textContent;
        operacion = "%";
        limpiar();
    }
    /*potencia.onclick = function(e){
        elmentoa = resultado.textContent;
        operacion = "^";
        limpiar();
    } */
    raiz.onclick = function(e){
        elmentoa = resultado.textContent;
        operacion = "&radic;";
        limpiar();
    }

    igual.onclick = function(e){
        elmeentob = resultado.textContent;
        resolver();
    }
}

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    elementoa = 0;
    elmeentob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
        res = parseFloat(elementoa) + parseFloat(elmeentob);
        break;
        case "-":
        res = parseFloat(elementoa) - parseFloat(elmeentob);
        break;
        case "*":
        res = parseFloat(elementoa) * parseFloat(elmeentob);
        break;
        case "/":
        res = parseFloat(elementoa) / parseFloat(elmeentob);
        break;
        case "%":
        res = parseFloat(elementoa) % parseFloat(elmeentob);
        break;
        case "^":
        res = parseFloat(elementoa) ^ parseFloat(elmeentob);
        break;
        case "&radic;":
        res = parseFloat(elementoa) &radic; parseFloat(elmeentob);
        break;
    }
    resetear();
    resultado.textContent = res;
}