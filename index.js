const { server, PORT} = require ('./server')



//encender el servidor
server.listen(PORT, () => console.log(`listening on ${PORT}`));

