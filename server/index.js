const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 

//endpoints
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/v1/movies', (req,res) => res.status(201).send({ movies:[] }));


//exportar app para poder requerirlo desde otros archivos
module.exports = { app, PORT};

