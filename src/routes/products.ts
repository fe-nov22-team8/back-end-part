import express from 'express';
import {
  getProductsByPageAndSize,
  getProductById,
} from '../controllers/products';

export const productRouter = express.Router();

productRouter.get('/', getProductsByPageAndSize);
productRouter.get('/:id', getProductById);
