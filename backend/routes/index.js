const express = require('express');
const multer = require('multer');

const UserController = require('../controllers/UserController');
const GradientController = require('../controllers/GradientController');
const DashboardController = require('../controllers/DashboardController');
const LoginController = require('../controllers/LoginController');

//Uploading file
const uploadConfig = require('../config/upload')
const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
	res.send('Hello from Node.js app \n')
})

//Todo Login Controller
routes.post('/login',LoginController.store )
//Todo Subscribe Controller

//Todo Approval Controller

//Tode Reject Controller

//Dashboard
routes.get('/gradient',DashboardController.geAlltGradient)
routes.get('/gradient/:gradientId', DashboardController.getGradientById)
routes.get('/gradient/:color',DashboardController.getGradient)

//Gradient
routes.post('/gradient', upload.single("thumbnail") ,GradientController.createGradient )
routes.delete('/gradient/:gradientId', GradientController.delete)


//user
routes.post('/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes;
