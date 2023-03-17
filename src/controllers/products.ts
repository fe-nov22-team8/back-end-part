import { getAll, getByPageAndSize, getById } from '../services/products';
import { Request, Response } from 'express';

export const getProductsByPageAndSize = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { page, size } = req.query;

  if (page === undefined && size === undefined) {
    const products = await getAll();

    res.send(products);

    return;
  } else if (page !== undefined && size !== undefined) {

    if (isNaN(+page) || isNaN(+size)) {
      res.sendStatus(400);

      return;
    }
      const products = await getByPageAndSize(+page, +size);

      res.send(products);
  } else {
    res.sendStatus(400);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  if (isNaN(+id)) {
    res.sendStatus(400);

    return;
  } else if (+id > 71) {
    res.send('There is only 71 product in DB');

    return;
  }

  const product = await getById(+id);

  res.send(product);
}
