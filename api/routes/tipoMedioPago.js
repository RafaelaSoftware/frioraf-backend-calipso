const getTipoMedioPago = async (req, res) => {
  try {
    const { userID } = req.query;
    const data = [];
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getTipoMedioPago;
