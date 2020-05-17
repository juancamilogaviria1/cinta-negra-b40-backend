const express = require('express');
const router = express.Router();

const Users = require('../models/Users');

//CREATE USER

router.post('/api/v1/users', (req, res) => {
    Users.create(req.body)
    .then(user =>res.status(201).send(user))
    .catch(err => res.status(400).send({ message: 'Error creating user', err }));
});

//GET ALL

router.get('/api/v1/users', (req, res) => {
    Users.find()
    .then(user =>res.status(200).send(user))
    .catch(err => res.status(404).send({ message: 'Users not found', err }));
});

module.exports = router;