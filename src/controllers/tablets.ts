import { Request, Response } from 'express';
import { getAll } from '../services/tablets';

export const getAllTablets = async (
  req: Request, 
  res: Response
): Promise<void> => {
  const tablets = await getAll();

  res.send(tablets);
};
