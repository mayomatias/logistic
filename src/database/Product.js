const DB = require("./db.json");
const { saveToDatabase } = require("./utils.js");

const getAllProducts = () => {
  try {
    return DB.products;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const createNewProduct = (newProduct) => {
const isAlreadyAdded = DB.products.findIndex((product) => product.name === newWorkOut.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: "Workout already exists"
    }
  }
  try {
    DB.products.push(newProduct);
    saveToDatabase(DB);
    return newProduct;
  } 
  catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
    getAllProducts,
    createNewProduct
}