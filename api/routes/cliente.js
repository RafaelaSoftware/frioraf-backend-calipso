const getCliente = async (req, res) => {
  try {
    let { filtro } = req.query;

    const data = [];
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getCliente;
