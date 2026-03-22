require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) =>{
    res.send("Hola Benn, ¿Qué haremos?");
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

