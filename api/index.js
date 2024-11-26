const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/authenticateToken.js");
const moment = require("moment");

//Import routes
const getCliente = require("./routes/cliente.js");
const getRodado = require("./routes/rodado.js");
const getProyecto = require("./routes/proyecto.js");
const getRepuesto = require("./routes/repuesto.js");
const getCompresor = require("./routes/compresor.js");

const getMoneda = require("./routes/moneda.js");
const getTipoMedioPago = require("./routes/tipoMedioPago.js");
const getSaldoEmpleado = require("./routes/saldoEmpleado.js");

router.use((req, res, next) => {
  console.log(
    `[${moment().format("hh:mm:ss")}] ${req.method} ${req.url} : ${
      res.statusCode
    }`
  );
  next();
});

const secretKey = process.env.SECRET_KEY;
const sayHello = async (req, res) => {
  return res.status(200).json({
    message:
      "👋 🌏 Hola. Servicio Backend de Calipso para FRIO RAF y RQS. " +
      secretKey,
  });
};

router.get("/", sayHello);
router.get("/cliente", authenticateToken, getCliente);
router.get("/rodado", authenticateToken, getRodado);
router.get("/proyecto", authenticateToken, getProyecto);
router.get("/repuesto", authenticateToken, getRepuesto);
router.get("/compresor", authenticateToken, getCompresor);

router.get("/moneda", authenticateToken, getMoneda);
router.get("/tipoMedioPago", authenticateToken, getTipoMedioPago);
router.get("/saldoEmpleado", authenticateToken, getSaldoEmpleado);

module.exports = router;
