const express = require('express');
const multer = require('multer');

const UserController = require('../controllers/UserController');
const GradientController = require('../controllers/GradientController');

//Uploading file
const uploadConfig = require('../config/upload')
const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
	res.send('Hello from Node.js app \n')
})

//Gradient
routes.post('/gradient', upload.single("thumbnail") ,GradientController.createGradient )
routes.get('/gradient/:gradientId', GradientController.getGradientById)

//user
routes.post('/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes;
