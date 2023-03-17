import { getAll, getByPageAndSize } from '../services/products';
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
