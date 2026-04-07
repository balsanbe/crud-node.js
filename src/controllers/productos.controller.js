
const querystring = require("querystring");

const produc = (req, res) => {
    const query = querystring.stringify(req.query);

    fetch("https://api.escuelajs.co/api/v1/products?" + query)
        .then((res) => res.json())
        .then((usuarios) => res.json(usuarios));
};

module.exports = {
    produc,    
};
