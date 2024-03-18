const routes = require('express').Router();
const {
	createUser,
	getProfile,
	createAddress,
	updateAddress,
	deleteAddress,
	listAddress,
} = require('../controller/userController');

routes.post('/register', createUser);

// routes.get('/profile', getProfile); // profile
routes.get('/profile');

// address
routes.get('/address', listAddress);
routes.post('/address', createAddress);
routes.put('/address', updateAddress);
routes.delete('/address', deleteAddress);
module.exports = routes;
