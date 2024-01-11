const { Product, products } = require('../models/productModel')

// Fetch all products
function getAllProducts() {
  return products
}

// Fetch specific product by ID
function getProductById(id) {
  return products.find(product => product.id === id)
}

// Create a new product
function createProduct(name, price, desc) {
  const prodId = products.length + 1
  const product = new Product(prodId, name, price, desc)
  products.push(product)
  return product
}

// Update product
function updateProduct(id, name, price, desc) {
  const product = products.find(product => product.id === id)
  if (product) {
    product.name = name
    product.price = price
    product.description = desc
  }
  return product
}

// Delete product
function deleteProduct(id) {
  const productIndex = products.findIndex(product => product.id === id)
  if (productIndex !== -1) {
    products.splice(productIndex, 1)
    return true
  }
  return false
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}