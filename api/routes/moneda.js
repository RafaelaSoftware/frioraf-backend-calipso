const { executeQuery, addFilter } = require("../../utils/db.js");

const getMoneda = async (req, res) => {
  try {
    const {} = req.query;
    let query = `select id, nombre as descripcion, simbolo from v_moneda`;

    let filter = "";

    query += filter;
    query += ` ORDER BY nombre`;
    const data = await executeQuery(query);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getMoneda;
