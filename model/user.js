const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	fullName: {
		type: String,
		required: true,
	},
	role: {
		type: String,
	},
	status: {
		type: String,
	},
	address: [
		{
			fullAddress: String,
			city: String,
			state: String,
			zip: String,
			country: String,
			phoneNumber: Number,
			defaultAddress: Boolean
		},
	],
});

module.exports = mongoose.model('User', userSchema);

/*

remove username 


*/
