const mongoose = require('mongoose')


const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  typeProduct: {
    type: String,
    required: true,
  },
  providerProduct: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }

})

const CadProduct = mongoose.model('product', Product)


module.exports = CadProduct