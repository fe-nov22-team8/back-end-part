import express from 'express';
import { getAllTablets } from '../controllers/tablets';

export const tabletsRouter = express.Router();

tabletsRouter.get('/', getAllTablets);
