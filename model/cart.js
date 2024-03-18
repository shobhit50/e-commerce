const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
	items: [
		{
			productId: {
				type: Schema.Types.ObjectId,
				ref: 'Product',
			},
			quantity: Number,
		},
	],
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = mongoose.model('Cart', cartSchema);
