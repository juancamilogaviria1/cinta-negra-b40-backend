const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorsSchema = new Schema ({
        temp: {
           type: String,
           
        },
        value:{
            type: String,
            required: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
});

const Sensors = mongoose.model('Sensors', sensorsSchema);

module.exports = { Sensors, sensorsSchema};