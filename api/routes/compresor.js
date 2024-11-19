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

    // group by marca
    let result = [];
    let currentMarca = "";
    let currentModelos = [];
    data.forEach((element) => {
      // trim and uppercase
      element.marca = element.marca.trim();
      element.modelo = element.modelo.trim();

      if (currentMarca.toUpperCase() !== element.marca.toUpperCase()) {
        if (currentMarca !== "") {
          result.push({
            marca: currentMarca.toUpperCase(),
            modelos: currentModelos,
          });
        }
        currentMarca = element.marca;
        currentModelos = [];
      }
      currentModelos.push(element.modelo.toUpperCase());
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getCompresor;
