const express = require('express');
const multer = require('multer');

const routes = express.Router();
const UserController = require('../controllers/UserController');
const GradientController = require('../controllers/GradientController');

//Uploading file
const uploadConfig = require('../config/upload')
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
	res.send('Hello from Node.js app \n')
})

//Gradient
routes.post('./gradient', upload.single('thumbnail'),GradientController.createGradient )
//user
routes.post('/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes;
