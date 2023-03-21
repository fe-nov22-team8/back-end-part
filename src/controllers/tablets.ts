import { Request, Response } from 'express';
import { getAll, getInfo } from '../services/tablets';

export const getAllTablets = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const tablets = await getAll();

  res.send(tablets);
};

export const getTabletsInfo = (req: Request, res: Response) => {
  const { tabletId } = req.params;

  const tabletsInfo = getInfo(tabletId);

  res.send(tabletsInfo);
};
