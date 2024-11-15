const { executeQuery, addFilter } = require("../../utils/db.js");

const getCompresor = async (req, res) => {
  try {
    const { marca } = req.query;
    let query = `SELECT marca, modelo FROM aux_os_compresor`;

    let filter = "";
    if (marca) filter = addFilter(filter, "marca", marca, "string");

    query += filter;
    query += ` ORDER BY marca, modelo`;
    const data = await executeQuery(query);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getCompresor;
