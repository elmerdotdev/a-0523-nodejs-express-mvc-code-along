class Product {
  constructor(id, name, price, desc) {
    this.id = id
    this.name = name
    this.price = price
    this.description = desc
  }
}

// In-memory table
const products = []

module.exports = {
  Product,
  products
}
  