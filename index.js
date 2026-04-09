require("dotenv").config();

const express = require("express");
const app = express();

//const mainRouter = require('./src/routes/main.router');
//app.use(mainRouter); benja 

// Express buscará cada app use de arriba a abajo para buscar coincidecias de la url que se mande, donde la encuentre ahi queda, ya no recorre la siguiente
app.use('',           require('./src/routes/main.router'));
app.use('/productos', require("./src/routes/productos.router"));
app.use('/usuarios' , require("./src/routes/usuarios.router"));

const PORT = process.env.PUERTO || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

