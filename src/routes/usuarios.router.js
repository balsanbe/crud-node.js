const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuarios.controller");

router.get("/:id", controller.usuari);

module.exports = router;