const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

// Route to fetch all products
router.get('/', (req, res) => {
  const products = productController.getAllProducts()
  res.render('products', { products, pageTitle: 'Products List'})
})

// Route to fetch one product
router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id)
  const product = productController.getProductById(productId)
  if (!product) {
    res.status(404).json({ error: 'No product exist' })
  } else {
    res.status(200).json(product)
  }
})

// Route to add a product
router.post('/', (req, res) => {
  const { name, price, description } = req.body // req.body is from POST request body
  const product = productController.createProduct(name, price, description)
  res.status(201).json(product)
})

// Route to update product
router.put('/:id', (req, res) => {
  const productId = parseInt(req.params.id)
  const { name, price, description } = req.body
  const product = productController.updateProduct(productId, name, price, description)
  if (!product) {
    res.status(404).json({ error: 'Product does not exist' })
  } else {
    res.status(200).json(product)
  }
})

// Route to delete product
router.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id)
  const result = productController.deleteProduct(productId)
  if (result) {
    res.status(200).send('Product deleted!')
  } else {
    res.status(404).json({ error: 'Product does not exist' })
  }
})

module.exports = router