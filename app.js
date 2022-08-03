var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

var Product = require('./ProductController')
// var productController = new productControllerClass()

mongoose
  .connect('mongodb://localhost:27017/ECommerceDB')
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!')
  })

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/' + 'Index.html')
})

app.get('/getProducts', function (reg, res) {
 
      Product.find() 
   .then((data) => {
    res.send(JSON.stringify(data))
  })
})

app.get('/add', function (req, res) {
  res.sendFile(__dirname + '/' + 'AddProduct.html')
})

app.post('/insert', function (req, res) {
  let product = new Product({
    Name: req.body.Name,
    Price: req.body.Price,
    Quantity: req.body.Quantity,
  })

  product.save().then(() => {
    console.log('Inserted')
    res.redirect('/')
  })
})

app.listen(3000, function () {
  console.log('Example app listening...')
})
