const { getAllSales, getSaleById, newSaleModel } = require('../models/salesModels');
const { getProductsService } = require('./productsServices');

const validateProductIds = async (items) => {
  const productIds = items.map(({ productId }) => productId);
  const storedIds = await getProductsService();

  return productIds.every((productId) =>
    storedIds.some(({ id }) => id === productId));
};

const getSalesService = async () => {
  const resp = await getAllSales();
  return resp;
};

const getSaleByIdService = async (id) => {
  const resp = await getSaleById(id);
  return resp;
};

const newSaleService = async (salesArray) => {
  const allIdsAreValids = await validateProductIds(salesArray);
  if (!allIdsAreValids) {
    return false;
  }
  const resp = await newSaleModel(salesArray);
  return resp;
};

module.exports = {
  getSalesService,
  getSaleByIdService,
  newSaleService,
  validateProductIds,
};
