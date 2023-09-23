const express = require("express");
const ControllerAvaliacao = require("../controllers/avaliacao.js");

const controller = new ControllerAvaliacao();

const router = express.Router();

router.post("/api/soma", controller.Somar);
router.post("/api/subtracao", controller.Subtrair);
router.post("/api/multiplicacao", controller.Multiplicar);
router.post("/api/divisao", controller.Dividir);
router.post("/api/potencia", controller.Potencia);
router.post("/api/raiz", controller.Raiz);

router.get("/api/operacoes", controller.OpDisponiveis);

module.exports = router;
