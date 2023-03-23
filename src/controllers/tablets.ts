import { Request, Response } from 'express';
import { getAll, getInfo } from '../services/tablets';

export const getAllTablets = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const tablets = await getAll();

  res.send(tablets);
};

export const getTabletsInfo = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { tabletId } = req.params;

  const tabletsInfo = await getInfo(tabletId);

  res.send(tabletsInfo);
};
