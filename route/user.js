const routes = require('express').Router();
const { createUser, getprofile, useraddress, updateaddress, deleteaddress, listaddress } = require('../controller/userController');

routes.post('/register', createUser);

routes.get('/profile', getprofile) // profile
routes.get('/profile')

// address
routes.get('/address', listaddress);
routes.post('/address', useraddress);
routes.put('/address', updateaddress);
routes.delete('/address', deleteaddress);
module.exports = routes;
