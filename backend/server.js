import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
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
