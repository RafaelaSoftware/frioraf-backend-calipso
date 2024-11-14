const { executeQuery } = require("../../utils/db.js");

const getCliente = async (req, res) => {
  try {
    let { filtro } = req.query;
    let query = `SELECT id, descripcion as nombre FROM vp_os_cliente where descripcion like '%INTELLYMATION%'`;
    const data = await executeQuery(query);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getCliente;
