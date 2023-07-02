const { getSalesService, getSaleByIdService, newSaleService } = require('../services/salesService');

const newSale = async (req, res) => {
  const resp = await newSaleService(req.body);
  if (resp) {
    return res.status(201).json(resp);
  }
  return res.status(404).json({ message: 'Product not found' });
};

const getSales = async (req, res) => {
   const resp = await getSalesService();
  return res.status(200).json(resp);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const resp = await getSaleByIdService(id);
  if (resp.length) {
    return res.status(200).json(resp);
  }
  return res.status(404).json({ message: 'Sale not found' });
};

const deleteSale = async (req, res) => {
  console.log(req);
  return res.status(204).json();
};

const updateSale = async (req, res) => {
  console.log(req);
  return res.status(200).json();
};

module.exports = {
  newSale,
  getSales,
  getSalesById,
  deleteSale,
  updateSale,
};
