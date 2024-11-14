const { executeQuery, addFilter } = require("../../utils/db.js");

const getRepuesto = async (req, res) => {
  try {
    const { empleado, proyecto, filtro } = req.query;
    let query = `SELECT producto_id as id, codigo, descripcion, cantidad, tecnico_id, ordentrabajo_id as proyecto_id FROM vp_os_repuesto_proyecto`;

    let filter = "";
    if (empleado) filter = addFilter(filter, "tecnico_id", empleado, "uuid");
    if (proyecto)
      filter = addFilter(filter, "ordentrabajo_id", proyecto, "uuid");
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

module.exports = getRepuesto;
