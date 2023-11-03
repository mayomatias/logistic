const Product = require("../database/Product.js")
const { v4: uuid } = require("uuid");

const getAllProducts = () => {
    try {
        const allProducts = Product.getAllProducts();
        return allProducts;
    } catch (error) {
        throw error;
    }
};
const createNewProduct = (newProduct) => {
    const productToinsert = {
        ...newProduct,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "GMT-3" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "GMT-3" }),
    }
    try {
        const createdProduct = Product.createNewProduct(productToinsert);
        return createdProduct;
      } catch (error) {
        throw error;
      }
};

module.exports = {
    getAllProducts,
    createNewProduct
}