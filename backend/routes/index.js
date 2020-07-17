const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');

routes.get('/', (req, res) => {
	res.send('Hello from Node.js app \n')
})

routes.post('/register', UserController.createUser)
routes.get('/user/:userid', UserController.getUserById)

module.exports = routes;
