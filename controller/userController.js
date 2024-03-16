
const User = require("../model/user");




exports.createUser = async (req, res) => {
    const { username, password, email, isSuperAdmin, isClient, address } = req.body;
    try {
        const user = new User({
            username,
            password,
            email,
            isSuperAdmin,
            isClient,
            address
        });
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.json({ message: error });
    }
}