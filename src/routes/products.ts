import express from 'express';
import {
  getProductsByPageAndSize,
  getProductById,
  getRecommendedProducts,
} from '../controllers/products';

export const productRouter = express.Router();

productRouter.get('/', getProductsByPageAndSize);
productRouter.get('/:id', getProductById);
productRouter.get('/:id/recommended', getRecommendedProducts);
