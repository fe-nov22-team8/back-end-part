import { Product } from '../model/product';
import { Product as ProductType } from '../types/product';

export const getAll = async (): Promise<ProductType[]> => {
  const products = await Product.findAll();

  return products;
};

export const getByPageAndSize = async (page: number, PAGE_SIZE: number): Promise<ProductType[]> => {
  const products = await Product.findAll({
    limit: PAGE_SIZE,
    offset: (page - 1) * PAGE_SIZE,
    order: [['year', 'DESC']],
  });

  return products;
};
