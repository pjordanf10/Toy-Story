var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/personagem", function (req, res) {
    dashController.personagem(req, res);
});

router.get("/filme", function (req, res) {
    dashController.filme(req, res);
});

router.get("/idade", function (req, res) {
    dashController.idade(req, res);
});

router.get("/kpi_filme", function (req, res) {
    dashController.kpi_filme(req, res);
});

router.get("/kpi_personagem", function (req, res) {
    dashController.kpi_personagem(req, res);
});

router.get("/kpi_faixa", function (req, res) {
    dashController.kpi_faixa(req, res);
});
module.exports = router;