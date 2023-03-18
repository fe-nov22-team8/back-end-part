import { Request, Response } from 'express';
import { getAll, getById } from '../services/phones';

export const getAllPhones = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const phones = await getAll();

  res.send(phones);
};

export const getPhoneById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { phoneId } = req.params;

  const phone = await getById(phoneId);

  if (!phone) {
    res.sendStatus(400);

    return;
  }

  res.send(phone);
};
