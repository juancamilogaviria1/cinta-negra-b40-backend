const {UsersService} = require('../services');
const utils = require('../utils');


module.exports = {
    create: async (req, res) => {
        try {     
        const user = await  UsersService.create(req.body);
        res.status(201).send(user)
        } catch (err) {
        res.status(400).send({ message: 'Error creating user', err });
        }

    },
    find: async (req, res) => {
        try {
            const users = await UsersService.find();
            res.status(200).send(users)
        } catch(err){
            res.status(404).send({ message: 'Users not found', err });
        } 
    },
    findById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UsersService.findById(id);
            res.status(200).send(user)
        } catch(err){
            res.status(404).send({ message: 'User not found', err });
        } 
    },
    findByIdAndUpdate: async (req, res) => {
        const { id } = req.params;
        const { body } = req;
        try {
            const user = await UsersService.findById(id);
            const updatedUser = await UsersService.update(user, body);
            res.status(200).send(updatedUser)
        } catch(err){
            res.status(404).send({ message: 'User not found', err });
        } 
    },
    findByIdAndDelete: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UsersService.findById(id);
            await UsersService.update(user, { is_active: false });
            res.status(204).send()
        } catch(err){
            res.status(404).send({ message: 'Error deleting user', err });
        } 
    },
    signup: async (req, res) => {
        try {     
        const user = await  UsersService.create(req.body);
        res.status(201).send({ message:"signup succesfull", user});
        } catch (err) {
        res.status(400).send({ message: 'Error signin up', err });
        }
    },
    login: async (req,res) => {
        const { email, password } = req.body;
        try{
            const user = await UsersService.findByEmail(email);
            if (!user) res.status(404).send({ message: 'User not found' });
            const isMatch = UsersService.comparePassword(password, user.password);
            if (!isMatch) res.status(400).send({ message: 'invalid credentials'});
            //Devolver JWT
                const token = utils.createToken({ 
                    id: user._id,    
                    first_name: user.first_name,
                    email: user.email,
                });
            return res.status(200).send({ message: "Login correct", token});
        } catch (err){
            res.status(400).send({ message: 'Error on login', err});
        }
        
    }

}



