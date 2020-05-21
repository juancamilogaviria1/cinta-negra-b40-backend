const { Sensors } = require('../models/Sensors');
const bcrypt = require('bcrypt');


module.exports = {
    create: (body) => {
        const newSensor = new Sensors(body);
        return newSensor.save();
    },
    find: () => Sensors.find( { is_active: true }),
    findById: (id) => Sensors.findById(id),
    update: (sensor, body) => {
        Object.assign(sensor, body);
        return sensor.save();
    },
} 