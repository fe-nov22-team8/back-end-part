import express from 'express';
import { getAllPhones } from '../controllers/phones';

export const phoneRouter = express.Router();

phoneRouter.get('/', getAllPhones);
