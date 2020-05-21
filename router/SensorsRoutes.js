const express = require('express');
const router = express.Router();
const { SensorsController } = require('../controller');
const { SensorsValidator } = require('../validators');

//CREATE USER  
router.post('/sensors', SensorsValidator.create,  SensorsController.create);
//GET ALL
router.get('/sensors',  SensorsController.find);
//GET ONE
router.get('/sensors/:id', SensorsController.findById);
//UPDATE
router.patch('/sensors/:id', SensorsController.findByIdAndUpdate);
//DELETE
router.delete('/sensors/:id', SensorsController.findByIdAndDelete);



// router.post('/sensors/:id/sensors', SensorsValidator.addSensorToUser,  SensorsController.addSensorToUser);
// router.get('/sensors/:id/sensors',  SensorsController.findUserSensors);
// router.get('/sensors/:idUser/sensors/:idSensor', SensorsController.findUserSensorById);
// router.delete('/sensors/:idUser/sensors/:idSensor', SensorsController.deleteUserSensorById);


module.exports = router;

