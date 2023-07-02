const {
  getProductsService,
  getProductByIdService,
  insertNewProductService,
  deleteProductService,
} = require('../services/productsServices');

const getProducts = async (req, res) => {
  const resp = await getProductsService();
  return res.status(200).json(resp);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const resp = await getProductByIdService(id);
  if (resp.length) {
    return res.status(200).json(resp[0]);
  }
  return res.status(404).json({ message: 'Product not found' });
};

const newProduct = async (req, res) => {
  const resp = await insertNewProductService(req.body);
  return res.status(201).json(resp);
};

const updateProduct = async (req, res) => {
  console.log(req);
  return res.status(200).json('/products');
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await deleteProductService(id);
  return res.status(204).json();
};

module.exports = {
  getProducts,
  getProductsById,
  newProduct,
  updateProduct,
  deleteProduct,
};
