const routes = require('express').Router();
const { createUser } = require('../controller/userController');

routes.post('/register', createUser);

module.exports = routes;
