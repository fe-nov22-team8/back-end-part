import { getAll } from '../services/products';
import { Request, Response } from 'express';

export const getAllProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const phones = await getAll();

  res.send(phones);
};
