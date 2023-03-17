import express from 'express';
import { getAllPhones, getPhoneById } from '../controllers/phones';

export const phonesRouter = express.Router();

phonesRouter.get('/', getAllPhones);
phonesRouter.get('/:phoneId', getPhoneById);
