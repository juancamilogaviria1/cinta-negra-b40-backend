const express = require('express');
const router = express.Router();
const { RolesController } = require('../controller');
const { RolesValidator } = require('../validators');

//CREATE USER
router.post('/users/:id/roles', RolesValidator.create, RolesController.create);
// //GET ALL
router.get('/users/:id/roles',  RolesController.find);
// //UPDATE
// router.patch('/users/:id/roles/:idRole', RolesValidator.update, RolesController.findByIdAndUpdate);
// //DELETE
// router.delete('/users/:id/roles/:idRole', RolesController.findByIdAndDelete);


module.exports = router;