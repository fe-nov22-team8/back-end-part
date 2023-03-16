import { Product } from '../model/product';
import { Product as ProductType } from '../types/product';

export const getAll = async (): Promise<ProductType[]> => {
  const products = await Product.findAll();

  return products;
};

export const getOneById = async (id: number): Promise<ProductType | null> => {
  const product = await Product.findByPk(id);

  return product || null;
}
