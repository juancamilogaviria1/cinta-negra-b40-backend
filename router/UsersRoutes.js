const express = require('express');
const router = express.Router();
const { UsersController } = require('../controller');
const { UsersValidator } = require('../validators');

//CREATE USER
router.post('/users', UsersValidator.create, UsersController.create);
//GET ALL
router.get('/users',  UsersController.find);
//GET ONE
router.get('/users/:id', UsersController.findById);
//UPDATE
router.patch('/users/:id', UsersController.findByIdAndUpdate);
//DELETE
router.delete('/users/:id', UsersController.findByIdAndDelete);


module.exports = router;