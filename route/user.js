const routes = require("express").Router();
const User = require("../model/user");

routes.post("/new-user", async (req, res) => {
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
});

module.exports = routes;