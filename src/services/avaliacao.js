class ServicesAvaliacao {

  Somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Informe somente números!");
    }
    const resultado = num1 + num2;

    return resultado;
  }

  Subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Informe somente números!");
    }
    const resultado = num1 - num2;

    return resultado;
  }

  Multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Informe somente números!");
    }
    const resultado = num1 * num2;

    return resultado;
  }

  Dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Informe somente números!");
    }
    const resultado = num1 / num2;

    return resultado;
  }

  Potencia(base, expoente) {
    if (isNaN(base) || isNaN(expoente)) {
      throw new Error("Informe somente números!");
    }
    const resultado = Math.pow(base, expoente);

    return resultado;
  }

  Raiz(num) {
    if (isNaN(num)) {
      throw new Error("Informe somente números!");
    }
    const resultado = Math.sqrt(num);

    return resultado;
  }
}

module.exports = ServicesAvaliacao;