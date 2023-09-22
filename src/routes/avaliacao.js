const express = require("express");
const ControllerAvaliacao = require("../controllers/avaliacao.js");

const controller = new ControllerAvaliacao();

const router = express.Router();

route.post("/api/soma", controller.Somar);
route.post("/api/subtracao", controller.Subtrair);
route.post("/api/multiplicacao", controller.Multiplicar);
route.post("/api/divisao", controller.Dividir);
route.post("/api/potencia", controller.Potencia);
route.post("/api/raiz", controller.Raiz);

route.get("/api/operacoes", controller.OpDisponiveis);

module.exports = router;
