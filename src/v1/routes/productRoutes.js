const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController.js");


router.get("/", (productController.getAllProducts));
router.post("/", (productController.createNewProduct));



module.exports = router;