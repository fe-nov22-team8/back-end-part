import { Product } from '../models/product';
import { Product as ProductType } from '../types/product';

export const getAll = async (): Promise<ProductType[]> => {
  const products = await Product.findAll();

  return products;
};

export const getById = async (id: number): Promise<ProductType | null> => {
  const product = await Product.findByPk(id);

  return product || null;
};

export const getByPageAndSize = async (
  page: number,
  PAGE_SIZE: number,
  sortBy: string,
  order: string,
): Promise<ProductType[]> => {
  const products = await Product.findAll({
    limit: PAGE_SIZE,
    offset: (page - 1) * PAGE_SIZE,
    order: [[sortBy, order]],
  });

  return products;
};
