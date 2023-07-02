const connection = require('./connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [resp] = await connection.execute(query);
  return resp;
};

const getProductById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [resp] = await connection.execute(query, [id]);
  return resp;
};

const newProductModel = async (product) => {
  const query = 'INSERT INTO StoreManager.products(name) VALUES(?);';
  const [resp] = await connection.execute(query, [product.name]);
  const { insertId } = resp;
  const newProduct = {
    id: insertId,
    name: product.name,
  };
  return newProduct;
};

const deleteProductModel = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?;';
  await connection.execute(query, [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  newProductModel,
  deleteProductModel,
};
