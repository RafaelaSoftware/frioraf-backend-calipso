const { executeQuery, addFilter } = require("../../utils/db.js");

const getSaldoEmpleado = async (req, res) => {
  try {
    const { empleado } = req.query;
    const data = [];
    data.push({
      id: "00000000-0000-0000-0000-000000000000",
      tipoMedioPago: "Efectivo",
      importe: 100000,
      moneda: "$ Pesos",
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getSaldoEmpleado;
