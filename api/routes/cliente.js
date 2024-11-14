const getCliente = async (req, res) => {
  try {
    let { filtro } = req.query;

    const data = [
      {
        id: 1,
        nome: "Fulano",
        idade: 30,
        email: "",
      },
      {
        id: 2,
        nome: "Ciclano",
        idade: 25,
        email: "",
      },
      {
        id: 3,
        nome: "Beltrano",
        idade: 40,
        email: "",
      },
      {
        id: 4,
        nome: "João",
        idade: 35,
        email: "",
      },
    ];
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = getCliente;
