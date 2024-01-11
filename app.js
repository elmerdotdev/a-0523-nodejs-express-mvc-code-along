const express = require('express')
const app = express()
const PORT = 3001

const productRoutes = require('./routes/productRoutes')
const todoRoutes = require('./routes/todoRoutes')

// Middleware to parse JSON
app.use(express.json())

// Set view engine to ejs
app.set('view engine', 'ejs')

// Route for home
app.get('/', (req, res) => {
  res.send('Server is running!')
})

// Route for products
app.use('/products', productRoutes)

// Route for todos
app.use('/todos', todoRoutes)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})