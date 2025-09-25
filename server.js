const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('.'));

let comentarios = [];

app.post('/comentarios', (req, res) => {
    const { nombre, comentario } = req.body;
    comentarios.push({ nombre, comentario });
    res.status(200).send('Comentario guardado');
});

app.get('/comentarios', (req, res) => {
    res.json(comentarios);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
