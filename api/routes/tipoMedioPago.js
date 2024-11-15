const { executeQuery, addFilter } = require("../../utils/db.js");

const getTipoMedioPago = async (req, res) => {
  try {
    const { empleado } = req.query;
    let query = `SELECT id, descripcion FROM vp_os_tipomediopago`;

    if (usuario) {
      query += ` WHERE empleado_id = '${empleado}' OR id = 0`;
    }
    query += ` ORDER BY id`;
    console.log(query);
    const data = await executeQuery(query);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getTipoMedioPago;
