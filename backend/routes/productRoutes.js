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
// router.get('/', getProducts());
router.route('/').get(getProducts);

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
// router.get('/:id', getProductById());
router.route('/:id').get(getProductById);

export default router;
