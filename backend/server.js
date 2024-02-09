// // Handling errors:
// // Create an XMLHttpRequest object
// var xhr = new XMLHttpRequest();

// // Set up a callback function to handle the response
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       var response = JSON.parse(xhr.responseText);
//       console.log(response);
//     } else {
//       console.error('Error:', xhr.status);
//     }
//   }
// };

// // Open a GET request
// xhr.open('GET', 'https://api.example.com/data', true);

// // Send the request
// xhr.send();

//---------------
import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
// import products from './data/products.js';

import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

//middleware
app.use((req, res, next) => {
  console.log('Hello!----- ');
  console.log('Request method:', req.method); // GET
  console.log('Request URL:', req.url); // /api/products
  console.log('Request headers:', req.headers); // {}
  console.log('Request body:', req.body); // undefined ???
  console.log('Hello! res----- ');
  // console.log(res);
  console.log('Response status code:', res.statusCode);
  console.log('Response headers:', res.getHeaders());
  next();
});

app.get('/', (req, res) => {
  res.send('API is running...+');
  console.log('hey +++');
});

app.use('/api/products', productRoutes);

// app.get('/api/products', (req, res) => {
//   res.json(products);
//   // console.log(res);
// });

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((item) => item._id === req.params.id);
//   res.json(product);
// });

// // const PORT = process.env.PORT || 5000;

// const PORT = 5001;

// app.use((err, req, res, next) => {
//   const error = new Error(`Not Found - ${req.originalUrl}`);
//   res.status(404);
//   next(error);
// });

// app.use((err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   res.status(statusCode);
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//   });
// });

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//---------------

// const express = require('express');
// const dotenv = require('dotenv');
// // const products = require('./data/products');
// const products = require('./data/products.js');

// dotenv.config();
// const app = express();

// app.get('/', (req, res) => {
//   res.send('API is running...')
// });

// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find(item => item._id === req.params.id)
//   res.json(product);
// });

// const PORT = process.env.PORT || 5000;

// app.listen(
//   PORT,
//   console.log(
//     `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
//   )
// );

//----

// import express from 'express';

// const app = express();

// app.listen(5001, console.log('SERVER RUNNING!'));

// npm i -D nodemon concurrently
// node backend/server
// npm start
// npm run server
// npm run client

// npm run dev
