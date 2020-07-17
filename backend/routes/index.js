const express = require('express');
const multer = require('multer');
//All Controllers
const UserController = require('../controllers/UserController');
const GradientController = require('../controllers/GradientController');
const DashboardController = require('../controllers/DashboardController');
const LoginController = require('../controllers/LoginController');
const RagistrationController = require('../controllers/RagistrationController');
const ApprovalController = require('../controllers/ApprovalController');
const RejectionController = require('../controllers/RejectionController');


//Uploading file
const uploadConfig = require('../config/upload')
const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
	res.send('Hello from Node.js app \n')
})

//Login Controller
routes.post('/login', LoginController.store)
//Todo Subscribe Controller


// Reject Controller
routes.post('/registration/:registration_id/rejection', RejectionController.rejection)

//Approval Controller
routes.post('/registration/:registration_id/approval', ApprovalController.approve )

//Raistration Controller
routes.post('/registration/:gradientId', RagistrationController.create)
routes.get('/registration/:registration_id', RagistrationController.getRegistration)

//Dashboard
routes.get('/gradient', DashboardController.geAlltGradient)
routes.get('/gradient/:gradientId', DashboardController.getGradientById)
routes.get('/gradient/:color', DashboardController.getGradient)

//Gradient
routes.post('/gradient', upload.single("thumbnail"), GradientController.createGradient)
routes.delete('/gradient/:gradientId', GradientController.delete)


//user
routes.post('/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes;
