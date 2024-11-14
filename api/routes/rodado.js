const { executeQuery, addFilter } = require("../../utils/db.js");

const getRodado = async (req, res) => {
  try {
    const data = [];
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getRodado;
