const querystring = require("querystring");
const cnx = require("../conexion/mySql");

const usuari = (req, res) => {
    fetch("https://api.escuelajs.co/api/v1/users/" + req.params.id)
        .then((res) => res.json())
        .then((usuarios) => res.json(usuarios));
};

const usuari_db = async (req, res) => {
  try {
    const [rows] = await cnx.query('select * from empledos');
    res.json(rows);
  } catch (error) {
    res.status(500).send('Error en la base de datos, ¡revisar!');
    console.log(error);
  }
};

module.exports = {
    usuari,
    usuari_db,
};
