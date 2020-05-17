const {UsersService} = require('../services');

module.exports = {
    create: (req, res) => {
        UsersService.create(req, body)
        .then(user =>res.status(201).send(user))
        .catch(err => res.status(400).send({ message: 'Error creating user', err }));
    },
    find: (req, res) => {
        UsersService.find()
        .then(user =>res.status(200).send(user))
        .catch(err => res.status(404).send({ message: 'Users not found', err }));
        },

}



