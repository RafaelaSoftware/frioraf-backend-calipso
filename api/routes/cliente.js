const { executeQuery, addFilter } = require("../../utils/db.js");

const getCliente = async (req, res) => {
  try {
    const { id, filtro } = req.query;
    let query = `SELECT id, descripcion FROM vp_os_cliente`;

    let filter = "";
    if (id) filter = addFilter(filter, "id", id, "uuid");
    if (filtro) filter = addFilter(filter, "descripcion", filtro, "string");

    query += filter;
    query += ` ORDER BY DESCRIPCION`;
    const data = await executeQuery(query);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getCliente;
