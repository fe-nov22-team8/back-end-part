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
  const { page, size, sort, order, query } = req.query;

  if (!page && !size && !sort && !order && !query) {
    const products = await getAll();

    res.send(products);

    return;
  }
 
  const prepPage = page || 1;
  const prepSize = size || 71;
  const prepOrder = order?.toString().toUpperCase();
  const prepSort = sort?.toString();
  const prepQuery = query?.toString();
  const products = await getByPageAndSize(
    +prepPage,
    +prepSize,
    prepSort,
    prepOrder,
    prepQuery,
  );

  res.send(products);
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
