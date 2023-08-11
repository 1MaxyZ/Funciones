//funcion sumar
function sumar(a, b) {
    return a + b;
  }

//funcion IMC = peso (kg)/[estatura (m)]*2
function calcularIMC(peso, altura) {
    var imc = peso / altura**2;
    return imc.toFixed(2);
  }

//funcion dar vuelta una palabra
function invertirString(texto) {
    var textoInvertido = "";
    for (let i=texto.length ; i>=0 ; i--) {
      textoInvertido += texto.charAt(i);
    }
    return textoInvertido;
  }

//funcion calculadora
function calculadora(num1, operacion, num2) {
    var resultado;
    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "multiplicacion":
        resultado = num1 * num2;
        break;
      case "division":
        resultado = num1 / num2;
        break;
      default:
        return "Operación no válida";
    }
    return resultado;
  }

//funcion control de alcholemia
function controlAlcoholemia(nivelAlcohol) {
  if (nivelAlcohol < 0.5) {
    console.log("Nivel de alcoholemia bajo. Puedes conducir.");
  } else if (nivelAlcohol >= 0.5 && nivelAlcohol < 1) {
    console.log("Nivel de alcoholemia moderado. No debes conducir.");
  } else {
    console.log("Nivel de alcoholemia alto. No puedes conducir.");
  }
}

//funcion multa por exceso de velocidad
function calcularMulta(velocidadActual, velocidadLimite) {
    var excesoVelocidad = velocidadActual - velocidadLimite;
    if (excesoVelocidad <= 0) {
      return "No se aplica ninguna multa.";
    } else if (excesoVelocidad <= 20) {
      return "Multa leve. Debes pagar 100.000$.";
    } else if (excesoVelocidad <= 40) {
      return "Multa media. Pero como es tu cumple te la dejo pasar pá.";
    } else {
      return "Multa grave. Debes pagar 10.000$ y tengo que suspender tu licencia de conducir.";
    }
  }