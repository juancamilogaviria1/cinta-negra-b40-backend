const express = require('express');
const server = express();
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const PORT = process.env.PORT || 3000; 
const { errors } = require('celebrate');

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(fileUpload({
    useTempFiles: true,
    tempFileDir : '/tmp/',
}));

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })
  
  //PARA ARCHIVOS
server.post('/upload', (req, res) =>{
    const file = req.files.photo;
    // console.log('prueba', file);
    cloudinary.uploader.upload(file,tempFilePath, function(error, result){
        if (error){
            console.log(error);
            res.status(400).json(error);
        }
        if (result) {
            console.log(result);
            console.log(result.url);
            res.status(200).json(result);
        }
    });
});





//endpoints
server.get('/', (req, res) => res.send('Hello World!'));

server.use('/api/v1', require('../router'));

server.use(errors());

//exportar server para poder requerirlo desde otros archivos
module.exports = { server, PORT};

