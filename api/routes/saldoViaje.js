const { executeQuery, addFilter } = require("../../utils/db.js");

const getSaldoViaje = async (req, res) => {
  try {
    const { nombre, apellido } = req.query;
    const data = [];
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getSaldoViaje;
