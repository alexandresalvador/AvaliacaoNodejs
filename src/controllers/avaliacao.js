const servico = new ServicesAvaliacao();

class ControllerAvaliacao {
  Somar(req, res) {
    try {
      const { num1, num2 } = req.body;

      const resultado = servico.Somar(num1, num2);

      res.json({ resultado });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro!" });
    }
  }

  Subtrair(req, res) {
    try {
      const { num1, num2 } = req.body;

      const resultado = servico.Subtrair(num1, num2);

      res.json({ resultado });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro!" });
    }
  }

  Multiplicar(req, res) {
    try {
      const { num1, num2 } = req.body;

      const resultado = servico.Multiplicar(num1, num2);

      res.json({ resultado });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro!" });
    }
  }

  Dividir(req, res) {
    try {
      const { num1, num2 } = req.body;

      const resultado = servico.Dividir(num1, num2);

      res.json({ resultado });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro!" });
    }
  }

  Potencia(req, res) {
    try {
      const { base, expoente } = req.body;

      const resultado = servico.Potencia(base, expoente);

      res.json({ resultado });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro!" });
    }
  }

  Raiz(req, res) {
    try {
      const { num } = req.body;

      const resultado = servico.Raiz(num);

      res.json({ resultado });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro!" });
    }
  }

  OpDisponiveis(req, res) {
  const op = [
    { nome: 'somar', descricao: 'Adição' },
    { nome: 'subtrair', descricao: 'Subtração' },
    { nome: 'multiplicar', descricao: 'Multiplicação' },
    { nome: 'dividir', descricao: 'Divisão' },
    { nome: 'potencia', descricao: 'Potência' },
    { nome: 'raiz', descricao: 'Raiz Quadrada' },
  ];

  res.json({ op });
}
}
