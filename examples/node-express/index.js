const express = require('express')

const app = express()

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
]

// Read,
app.get('/api/products', (req, res) => {
  res.json(products)
})

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})
