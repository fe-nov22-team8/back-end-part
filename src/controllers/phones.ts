import { getAll } from '../services/phones';
import { type Request, type Response } from 'express';

export const getAllPhones = async (req: Request, res: Response): Promise<void> => {
  const phones = await getAll();

  res.send(phones);
};
