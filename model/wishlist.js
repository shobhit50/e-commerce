const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
	products: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Product',
		},
	],
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
