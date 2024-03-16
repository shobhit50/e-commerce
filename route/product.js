const routes = require("express").Router();
const { Router } = require("express");
const { Product, ProductCategory, } = require("../model/product");
const User = require("../model/user");
const { createProduct, getProducts, updateProduct, deleteProduct } = require("../controller/productController");

routes.post("/", createProduct);

routes.get("/:id", getProducts);

// update route
routes.patch("/:id", updateProduct);

// delete route
routes.delete("/:id", deleteProduct);


module.exports = routes;