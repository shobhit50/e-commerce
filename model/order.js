const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
	products: [
		{
			productId: {
				type: Schema.Types.ObjectId,
				ref: 'Product',
			},
			price: Number,
			quantity: Number,
			totalAmount: Number,
		},
	],
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	total: Number,
	status: {
		type: String,
		default: 'Pending',
	},
	paymentStatus: String,
	paymentType: String,
	paymentTransactionId: String,
	//todo - shippingAddress
});

module.exports = mongoose.model('Order', orderSchema);
