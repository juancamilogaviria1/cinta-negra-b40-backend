const express = require('express');
const router = express.Router();
const { UsersController } = require ('../controller');

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        const authorization = req.headers;
        const token = authorization.split(" ")[1];
        const decode = jwt.verify(token, proces.env.JWT_SECRET);
        req.decode = decode;
        next();
    } catch (err) {
        res.status(403).send({ message: "Error with token", err })
    }
};

//CREATE USER
router.post('/users', UsersController.create);
//GET ALL
router.get('/users', verifyToken, UsersController.find);
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