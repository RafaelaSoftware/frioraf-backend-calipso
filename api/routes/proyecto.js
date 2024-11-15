const { executeQuery, addFilter } = require("../../utils/db.js");

const getProyecto = async (req, res) => {
  try {
    const { cliente, filtro } = req.query;
    let query = `SELECT id, codigo as descripcion, cliente_id, cliente_n FROM vp_os_proyecto`;

    let filter = "";
    if (cliente) filter = addFilter(filter, "cliente_id", cliente, "uuid");
    if (filtro) filter = addFilter(filter, "codigo", filtro, "string");

    query += filter;
    query += ` ORDER BY CODIGO`;
    const data = await executeQuery(query);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getProyecto;
