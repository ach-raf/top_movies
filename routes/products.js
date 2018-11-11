const express = require("express");
const router = express.Router();
const ProductsController = require('../controllers/products');

router.get("/", ProductsController.products_get_all);
module.exports = router;