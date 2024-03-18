const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
	name: String,
	description: String,
	image: {
		url: String,
		filename: String,
	},
	price: Number,
	quantity: Number,
	productCategory: {
		type: Schema.Types.ObjectId,
		ref: 'ProductCategory',
		default: 'other', // temporary value,  after creating category it will be updated
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	status: String,
});


const Product = mongoose.model('Product', productSchema);
const ProductCategory = mongoose.model(
	'ProductCategory',
	productCategorySchema
);

module.exports = { Product, ProductCategory };
