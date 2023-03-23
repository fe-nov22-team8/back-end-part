import {
  getAll,
  getByPageAndSize,
  getById,
  getRecommended,
  getNew,
  getDiscountProducts,
} from '../services/products';
import { Request, Response } from 'express';

export const getProductsByPageAndSize = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { page, size, sort, order } = req.query;

  if (!page && !size && !sort && !order) {
    const products = await getAll(); 

    res.send(products);

    return;
  } else if (
    page !== undefined &&
    size !== undefined &&
    sort !== undefined &&
    order !== undefined
  ) {
    if (isNaN(+page) || isNaN(+size)) {
      res.sendStatus(400);

      return;
    }

    const prepOrder = order.toString().toUpperCase();
    const prepSort = sort.toString();
    const sorts = ['year', 'name', 'price'];
    const orders = ['ASC', 'DESC'];

    if (!sorts.includes(prepSort) || !orders.includes(prepOrder)) {
      res.sendStatus(400);

      return;
    }

    const products = await getByPageAndSize(+page, +size, prepSort, prepOrder);

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

  const product = await getById(id);

  res.send(product);
};

export const getRecommendedProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  const recommendedProducts = await getRecommended(id);

  res.send(recommendedProducts);
};

export const getNewProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const newProducts = await getNew();

  res.send(newProducts);
};

export const getProductsWithDiscount = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const discountProducts = await getDiscountProducts();

  res.send(discountProducts);
};
