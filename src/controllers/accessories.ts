import { Request, Response } from 'express';
import { getAll } from '../services/accessories';

export const getAllAccessories = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const accessories = await getAll();

  res.send(accessories);
};
