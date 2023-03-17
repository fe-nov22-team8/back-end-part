import express from 'express';
import { getProductsByPageAndSize } from '../controllers/products';

export const productRouter = express.Router();

productRouter.get('/', getProductsByPageAndSize);
