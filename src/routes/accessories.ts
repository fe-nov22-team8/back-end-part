import express from 'express';
import { getAllAccessories } from '../controllers/accessories';

export const accessoriesRouter = express.Router();

accessoriesRouter.get('/', getAllAccessories);
