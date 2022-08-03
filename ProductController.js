const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
  Name: String,
  Price: Number,
  Quantity: Number,
})

module.exports = mongoose.model('Product', productSchema)

 
