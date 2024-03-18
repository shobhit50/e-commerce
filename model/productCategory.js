const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productCategorySchema = new Schema({
	name: String,
	description: String,
	image: {
		url: String,
		filename: String,
	},
	parentCategory: {
		type: Schema.Types.ObjectId,
		ref: 'ProductCategory',
		default: null, // for top-level categories, this can be null
	},
});

const ProductCategory = mongoose.model(
	'ProductCategory',
	productCategorySchema
);

module.exports = { ProductCategory };
