const { describe, it, expect } = require("@jest/globals");

const ServicesAvaliacao = require("../src/services/avaliacao");

describe("Testes-Avaliacao", () => {
  const servico = new ServicesAvaliacao();

  it("Soma entre dois números:", () => {
    const result = servico.Somar(-12, 0);
    expect(result).toBe(-12);
  });

  it("Subtração entre dois números:", () => {
    const result = servico.Subtrair(0, -8);
    expect(result).toBe(8);
  });

  it("Multiplicação entre dois números:", () => {
    const result = servico.Multiplicar(-19, 0.32);
    expect(result).toBe(-6.08);
  });

  it("Divisão entre dois números:", () => {
    const result = servico.Dividir(0.15, -2);
    expect(result).toBe(-0.075);
  });

  it("Potenciação entre uma base e um expoente:", () => {
    const result = servico.Potencia(-12, 3);
    expect(result).toBe(-1728);
  });

  it("Radiciação entre um número:", () => {
    const result = servico.Raiz(121);
    expect(result).toBe(11);
  });
});
