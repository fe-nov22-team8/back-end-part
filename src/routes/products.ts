import express from 'express';
import {
  getProductsByPageAndSize,
  getProductById,
  getRecommendedProducts,
  getNewProducts,
  getProductsWithDiscount,
} from '../controllers/products';

export const productRouter = express.Router();

productRouter.get('/', getProductsByPageAndSize);
productRouter.get('/new', getNewProducts);
productRouter.get('/discount', getProductsWithDiscount);
productRouter.get('/:id', getProductById);
productRouter.get('/:id/recommended', getRecommendedProducts);
