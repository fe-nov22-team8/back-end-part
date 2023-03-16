import { Phone } from '../model/products';
import { Product as ProductType } from '../types/product';

export const getAll = async (): Promise<ProductType[]> => {
  const products = await Phone.findAll();

  return products;
};

export const getOneById = async (id: number): Promise<ProductType | null> => {
  const product = await Phone.findByPk(id);

  return product || null;
}
