const express = require('express');
const router = express.Router();
const { UsersController } = require ('../controller');

//CREATE USER
router.post('/users', UsersController.create);
//GET ALL
router.get('/users', UsersController.find);
//GET ONE
router.get('/users/:id', UsersController.findById);
//UPDATE
router.patch('/users/:id', UsersController.findByIdAndUpdate);
//DELETE
router.delete('/users/:id', UsersController.findByIdAndDelete);

//LOGIN
router.post('/users/signup', UsersController.signup);
router.post('/users/login', UsersController.login);


module.exports = router;