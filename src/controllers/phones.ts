import { Request, Response } from 'express';
import { getAll, getById } from '../services/phones';

export const getAllPhones = (
  req: Request,
  res: Response,
): void => {
  const phones = getAll();

  res.send(phones);
};

export const getPhoneById = (
  req: Request,
  res: Response,
): void => {
  const { phoneId } = req.params;

  const phone = getById(phoneId);

  if (!phone) {
    res.sendStatus(400);

    return;
  }

  res.send(phone);
};
