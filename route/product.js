const routes = require('express').Router();
const { Router } = require('express');
const { Product, ProductCategory } = require('../model/product');
const User = require('../model/user');

routes.post('/', async (req, res) => {
	// const user = req.user._id;
	// const owner = User.findById(user);
	const { name, description, price, productCategory, owner } = req.body;
	try {
		const product = new Product({
			name,
			description,
			price,
			productCategory,
			owner // here should be the user object id
		});
		const savedProduct = await product.save();
		res.json(savedProduct);
	} catch (error) {
		res.json({ message: error });
	}
});

routes.get('/:id', async (req, res) => {
	try {
		const products = await Product.findById(req.params.id);
		res.json(products);
	} catch (error) {
		res.json({ message: error });
	}
});

// update route
routes.patch('/:id', async (req, res) => {
	try {
		const updatedProduct = await Product.findById(req.params.id);
		updatedProduct.name = req.body.name;
		updatedProduct.description = req.body.description;
		updatedProduct.price = req.body.price;
		updatedProduct.productCategory = req.body.productCategory;
		updatedProduct.owner = req.body.owner;
		const savedProduct = await updatedProduct.save();

		res.json(savedProduct);
	} catch (error) {
		res.json({ message: error });
	}
});

// delete route

routes.delete('/:id', async (req, res) => {
	try {
		const deletedProduct = await Product.findByIdAndDelete(req.params.id);
		res.json(deletedProduct);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = routes;
