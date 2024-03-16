const routes = require("express").Router();
const User = require("../model/user");
const { createUser } = require("../controller/userController");

routes.post("/new-user", createUser);

module.exports = routes;