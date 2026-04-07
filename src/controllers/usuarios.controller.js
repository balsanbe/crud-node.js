const querystring = require("querystring");

const usuari = (req, res) => {
    fetch("https://api.escuelajs.co/api/v1/users/" + req.params.id)
        .then((res) => res.json())
        .then((usuarios) => res.json(usuarios));
};

module.exports = {
    usuari,
};
