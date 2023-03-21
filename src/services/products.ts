import { Op, literal } from 'sequelize';
import { Product } from '../models/product';
import { Product as ProductType } from '../types/product';

export const getAll = async (): Promise<ProductType[]> => {
  const products = await Product.findAll({
    where: { category: 'phones' },
  });

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
    where: { category: 'phones' },
    limit: PAGE_SIZE,
    offset: (page - 1) * PAGE_SIZE,
    order: [[sortBy, order]],
  });

  return products;
};

export const getRecommended = async (id: number) => {
  const product = await getById(id);

  if (product !== null) {
    const recommended = await Product.findAll({
      where: {
        [Op.or]: [
          { color: product.color },
          { ram: product.ram },
          { capacity: product.capacity },
          { screen: product.screen },
        ],
      },
    });

    return recommended;
  }
};

export const getNew = async () => {
  const newProducts = await Product.findAll({
    where: { year: '2019' }
  });

  return newProducts;
};

export const getDiscountProducts = async () => {
  const discountProducts = await Product.findAll({
    order: literal('(full_price - price) DESC')
  });

  return discountProducts;
};
