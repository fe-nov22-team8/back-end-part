import { Product as ProductType } from '../types/product';
import { Product } from '../models/product';

export const getAll = async (): Promise<ProductType[]> => {
  const accessories = await Product.findAll({
    where: { category: 'accessories' },
  });

  return accessories;
};
