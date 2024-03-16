const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	isSuperAdmin: {
		type: Boolean,
		default: false,
	},
	isClient: {
		type: Boolean,
		default: false,
	},
	address: [
		{
			street: String,
			city: String,
			state: String,
			zip: String,
			country: String,
		},
	],
});

module.exports = mongoose.model('User', userSchema);
