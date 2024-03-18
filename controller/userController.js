const User = require('../model/user');

exports.createUser = async (req, res) => {
	const { username, password, email, isSuperAdmin, isClient, address } =
		req.body;
	try {
		const user = new User({
			username,
			password,
			email,
			isSuperAdmin,
			isClient,
			address,
		});
		const savedUser = await user.save();
		res.json(savedUser);
	} catch (error) {
		res.json({ message: error });
	}
};



// get profile

exports.getprofile = async

// get user address
exports.listaddress = async (req, res) => {
	try {
		const { userid } = req.body
		console.log(userid)
		const user = await User.findById(userid)
		res.json(user.address);
	} catch (error) {
		console.log(error)

	}
}


// POST add new address 
exports.useraddress = async (req, res) => {
	try {
		const { userid } = req.body
		console.log(userid)
		const user = await User.findById(userid)
		data = {
			street: "agra road",
			city: "Aligarh",
			state: "up",
			zip: "20201",
			country: "india",
		}
		user.address.push(data)
		user.save()
		res.json(user);

	} catch (error) {
		console.log(error)

	}
}


// PUT update adress by id 
exports.updateaddress = async (req, res) => {
	try {
		const { userid, addressid, newaddress } = req.body;

		const user = await User.findById(userid);
		for (let address of user.address) {

			if (address._id.toString() === addressid) {
				console.log(address)
				address.street = newaddress.street;
				address.city = newaddress.city;
				address.state = newaddress.state;
				address.zip = newaddress.zip;
				address.country = newaddress.country;

				console.log(address)
			}

		}

		await user.save();
	}
	catch (error) {
		console.log(error);
	}
};

// DELETE Adress by id 
exports.deleteaddress = async (req, res) => {
	try {
		const { userid, addressid } = req.body;
		const user = await User.findByIdAndUpdate(
			userid,
			{ $pull: { address: { _id: addressid } } },
			{ new: true }
		);

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server error" });
	}
};