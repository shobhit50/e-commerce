const routes = require('express').Router();
const {
	createProduct,
	getProduct,
	updateProduct,
	deleteProduct,
	listProducts,
} = require('../controller/productController');

// LIST PRODUCT
routes.get('/list', listProducts);
// CREATE PRODUCT
routes.post('/', createProduct);
// GET PRODUCT
routes.get('/:id', getProduct);
// UPDATE PRODUCT
routes.patch('/:id', updateProduct);
// DELETE PRODUCT
routes.delete('/:id', deleteProduct);

module.exports = routes;
