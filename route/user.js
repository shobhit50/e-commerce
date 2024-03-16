const routes = require('express').Router();
const { createUser } = require('../controller/userController');

routes.post('/create', createUser);

module.exports = routes;
