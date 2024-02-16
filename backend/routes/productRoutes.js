import express from 'express';
// import asyncHandler from 'express-async-handler';
const router = express.Router();
// import Product from '../models/productModel.js';
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public

router.get(
  '/',
  getProducts()
  // asyncHandler(async (req, res) => {
  //   // const products = await Product.find({});
  //   // res.json(products);
  // })
);

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public

router.get(
  '/:id',
  getProductById()
  // asyncHandler(async (req, res) => {
  //   // const product = await Product.findById(req.params.id);

  //   // if (product) {
  //   //   res.json(product);
  //   // } else {
  //   //   // res.status(404).json({ message: 'Product not found' });

  //   //   res.status(404);
  //   //   throw new Error('Product not found');
  //   // }
  // })
);

export default router;
