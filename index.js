const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 

//endpoints
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/v1/movies', (req,res) => res.status(201).send({ movies:[] }));


//encender el servidor
app.listen(PORT, () => console.log(`listening on ${PORT}`));