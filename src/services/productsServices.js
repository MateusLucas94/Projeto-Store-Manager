const {
  getAllProducts,
  getProductById,
  newProductModel,
  deleteProductModel,
} = require('../models/productsModels');

const getProductsService = async () => {
  const resp = await getAllProducts();
  return resp;
};

const getProductByIdService = async (id) => {
  const resp = await getProductById(id);
  return resp;
};

const insertNewProductService = async (product) => {
  const resp = await newProductModel(product);
  return resp;
};

const deleteProductService = async (id) => {
  await deleteProductModel(id);
};

module.exports = {
  getProductsService,
  getProductByIdService,
  insertNewProductService,
  deleteProductService,
};
