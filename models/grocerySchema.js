const { model, Schema } = require('mongoose');

const productSchema = new Schema({
  productName: String,
  productId: String,
  description: String,
  createdAt: String,
  expirationDate: Date,
  price: Number,
  quantity: Number,
});

module.exports = model('Product', productSchema);
