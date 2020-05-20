const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares')

router.use(require('./PublicRoutes'));


// Al comentar nos permite realizar peticion sin el token, de lo contrario
// hay que hacer peticion a login para tomar el token. 

// router.use(verifyToken); 

router.use(require('./PrivateRoutes'));

module.exports = router;
