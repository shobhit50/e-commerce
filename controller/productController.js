const { Product, ProductCategory } = require('../model/product');
const User = require('../model/user');

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
	// const user = req.user._id;
	// const owner = User.findById(user);
	const { name, description, price, productCategory, owner } = req.body;
	try {
		const product = new Product({
			name,
			description,
			price,
			productCategory,
			owner, // here should be the user object id
		});
		const savedProduct = await product.save();
		res.json(savedProduct);
	} catch (error) {
		res.json({ message: error });
	}
};

// GET PRODUCT BY ID
exports.getProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.json(product);
	} catch (error) {
		res.json({ message: error });
	}
};

// UPDATE PRODUCT BY ID
exports.updateProduct = async (req, res) => {
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
};

// DELETE PRODUCT BY ID
exports.deleteProduct = async (req, res) => {
	try {
		const deletedProduct = await Product.findByIdAndDelete(req.params.id);
		res.json(deletedProduct);
	} catch (error) {
		res.json({ message: error });
	}
};

// LIST ALL PRODUCTS
exports.listProducts = async (req, res) => {
	const { clientId, limit, offset } = req.query;
	try {
		console.log("inside fn 1")
		console.log(`clientId 1 ${clientId}`)
		if (clientId) {
			// CLIENT LISTING
			console.log(`clientId 2 ${clientId}`)
			query.owner = { clientId };
		}
		console.log("inside fn 2")

		// const allProducts = await Product.find(query)
		// 	.skip(Number(offset))
		// 	.limit(Number(limit));

		const allProducts = await Product.find();

		console.log(allProducts);

		res.json(allProducts);
	} catch (error) {
		res.json({ message: error });
	}
};
