const express = require('express');
const {productsAll, productsRandom} = require('./controller/productsController.js');
const app = express();
const PORT = 8080;

try {
    const server = app.listen(PORT, () => {
        console.log(`servidor http escuchando en el puerto ${server.address().port}`);
    });
} catch (error) {
    server.on("error", error => console.log(`error en el servidor ${error}`));
}

app.get('/productos', async (req, res) => {
    res.setHeader("Content-Type", "application/json");  
    res.json(await productsAll());
});

app.get('/productosRandom', async (req, res) => {
    res.setHeader("Content-Type", "application/json");  
    res.json(await productsRandom());
});