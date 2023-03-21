import { Request, Response } from 'express';
import { getAll } from '../services/accessories';

export const getAllAccessories = (req: Request, res: Response) => {
  const accessories = getAll();

  res.send(accessories);
};
