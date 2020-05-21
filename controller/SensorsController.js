const { SensorsService } = require('../services');
const utils = require('../utils');


module.exports = {
    create: async (req, res) => {
        try {     
        const sensor = await  SensorsService.create(req.body);
        res.status(201).send(sensor)
        } catch (err) {
         res.status(400).send({ message: 'Error creating sensor', err });
        }

    },
    find: async (req, res) => {
        try {
            const sensors = await SensorsService.find();
            res.status(200).send(sensors)
        } catch(err){
            res.status(404).send({ message: 'Sensors not found', err });
        } 
    },
    findById: async (req, res) => {
        const { id } = req.params;
        try {
            const sensor = await SensorsService.findById(id);
            res.status(200).send(sensor)
        } catch(err){
            res.status(404).send({ message: 'Sensor not found', err });
        } 
    },
    findByIdAndUpdate: async (req, res) => {
        const { id } = req.params;
        const { body } = req;
        // if(body.roles)        
        try {
            const sensor = await SensorsService.findById(id);
            const updatedSensor = await SensorsService.update(sensor, body);
            res.status(200).send(updatedSensor)
        } catch(err){
            res.status(404).send({ message: 'Sensor not found', err });
        } 
    },
    findByIdAndDelete: async (req, res) => {
        const { id } = req.params;
        try {
            const sensor = await SensorsService.findById(id);
            await SensorsService.update(sensor, { is_active: false });
            res.status(204).send()
        } catch(err){
            res.status(404).send({ message: 'Error deleting sensor', err });
        } 
    },
}



