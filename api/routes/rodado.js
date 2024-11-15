const { executeQuery, addFilter } = require("../../utils/db.js");

const getRodado = async (req, res) => {
  try {
    const { filtro } = req.query;
    let query = `SELECT id, descripcion FROM vp_os_rodado`;

    let filter = "";
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

module.exports = getRodado;
