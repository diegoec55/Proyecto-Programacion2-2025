const express = require("express");
const app = express();
require('dotenv').config();
const path = require('path');
const methodOverride = require('method-override');

const db = require('./database/models')

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

async function conectarDB(){
    try {
        await db.sequelize.authenticate();
        console.log("Conexion a MySQL exitosa");        
    } catch (error) {
        console.log('Error conectando a la DB:', error.message);       
    }
};

conectarDB();

const homeRoutes = require("./routes/homeRoutes")
const productosRoutes = require('./routes/productosRoutes')
const categoriasRoutes = require('./routes/categoriasRoutes')
const userRoutes = require('./routes/userRoutes')
            
app.use("/", homeRoutes)
app.use("/productos", productosRoutes)
app.use("/categorias", categoriasRoutes)
app.use("/usuarios", userRoutes)

app.listen(PORT, () => {
    console.log("--------------------------------------------------------");
    console.log("--------------------------------------------------------");
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
    console.log("--------------------------------------------------------");
    console.log("--------------------------------------------------------");
});