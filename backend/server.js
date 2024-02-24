// server.js
import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

//middleware
app.use((req, res, next) => {
  console.log('Hello! req----- ');
  console.log('Request method:', req.method); // GET
  console.log('Request URL:', req.url); // /api/products
  console.log('Request headers:', req.headers); // {}
  console.log('Request body:', req.body); // { email: 'john@example.com', password: 12345 }
  console.log('Hello! res----- ');
  // console.log(res);
  console.log('Response status code:', res.statusCode); // code: 200
  console.log('Response headers:', res.getHeaders()); // [Object: null prototype] { 'x-powered-by': 'Express' }

  // console.log('req-----------|--------------', req);
  // console.log('res-----------|--------------', res);
  next();
});

app.get('/', (req, res) => {
  res.send('API is running...+');
  console.log('hey +++');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// import express from 'express';

// const app = express();

// app.listen(5001, console.log('SERVER RUNNING!'));

// npm i -D nodemon concurrently
// node backend/server
// npm start
// npm run server
// npm run client

// npm run dev
