import express from 'express';
import { getAllTablets, getTabletsInfo } from '../controllers/tablets';

export const tabletsRouter = express.Router();

tabletsRouter.get('/', getAllTablets);
tabletsRouter.get('/:tabletId', getTabletsInfo);
