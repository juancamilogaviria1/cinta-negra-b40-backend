require('dotenv').config()

const { server, PORT} = require ('./server');
require('./database');

//encender el servidor
server.listen(PORT, () => console.log(`listening on ${PORT}`));

