const { app, PORT} = require ('./server')



//encender el servidor
app.listen(PORT, () => console.log(`listening on ${PORT}`));

