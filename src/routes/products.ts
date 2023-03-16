import express from 'express';
import { getAllProducts } from '../controllers/products';

export const productRouter = express.Router();

productRouter.get('/', getAllProducts);
