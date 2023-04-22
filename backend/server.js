const express = require('express');
const products = require('./data/products');

const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

app.get('/', (req, res) => {
  res.send('API is running...')
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(item => item._id === req.params.id)
  res.json(product);
});

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });

app.listen(5000, console.log('Server running on port'));

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });