const productServices = require("../services/productService.js")

const getAllProducts = (req, res) => {
    try {
      const allProducts = productServices.getAllProducts();
      res.send({ status: "OK", data: allProducts });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "ERROR", data:{ error: error?.message || error}})
    }
    
  };

  const createNewProduct = (req, res) => {
    const body = req.body;
    const newProduct = { 
        name: body.name,
        description: body.description,
        price: body.price,
        quantity: body.quantity,
        category: body.category,
        barcode: body.barcode
     }
     try {
        const createdProduct = productServices.createNewProduct(newProduct);
        res.status(201).send({ status: "OK", data: createdProduct });
      } catch (error) {
        res
          .status(error?.status)
          .send({status: "FAILED", data: { error: error?.message || error }})
      }
  };


module.exports = {
    getAllProducts,
    createNewProduct
}