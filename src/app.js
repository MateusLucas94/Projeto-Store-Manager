const express = require('express');
const {
  getProducts,
  getProductsById,
  newProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/productsController');
const {
  newSale,
  getSalesById,
  getSales,
  deleteSale,
  updateSale } = require('./controllers/salesController');
const { validateName, checkProductExistence } = require('./middlewares/productsValidation');
const {
  validateId,
  validateQuantity,
  validateQuantityType,
} = require('./middlewares/salesValidation');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
app.get('/products/:id', getProductsById);
app.get('/products', getProducts);
app.get('/sales/:id', getSalesById);
app.get('/sales', getSales);

app.put('/products/:id', validateName, updateProduct);
app.put('/sales/:id', validateId, validateQuantity, validateQuantityType, updateSale);

app.post('/products', validateName, newProduct);
app.post('/sales',
  validateId,
  validateQuantity,
  validateQuantityType,
  newSale);

app.delete('/products/:id', checkProductExistence, deleteProduct);
app.delete('/sales/:id', deleteSale);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação 
module.exports = app;