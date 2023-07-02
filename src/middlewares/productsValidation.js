const connection = require('../models/connection');

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      message: '"name" is required',
    });
  }
  if (name.length < 5) {
     return res.status(422).json({
       message: '"name" length must be at least 5 characters long',
     });
  }
  next();
};

const checkProductExistence = async (req, res, next) => {
  const { id } = req.params;
   const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
   const [resp] = await connection.execute(query, [id]);
   if (!resp.length) {
     return res.status(404).json({
       message: 'Product not found',
     });
   }
  next();
};

module.exports = {
  validateName,
  checkProductExistence,
};
