import { Op, literal } from 'sequelize';
import { Product } from '../models/product';
import { Product as ProductType } from '../types/product';

export const getAll = async (): Promise<ProductType[]> => {
  const products = await Product.findAll({
    where: { category: 'phones' },
  });

  return products;
};

export const getById = async (id: string): Promise<ProductType | null> => {
  const product = await Product.findOne({
    where: { itemId: id },
  });

  return product || null;
};

export const getByPageAndSize = async (
  page: number,
  PAGE_SIZE: number,
  sortBy = 'name',
  order = 'asc',
  query = '',
)=> {
  const products = await Product.findAll({
    where: {
      category: 'phones',
      name: {
        [Op.iLike]: `%${query}%`,
      },
    },
    limit: PAGE_SIZE,
    offset: (page - 1) * PAGE_SIZE,
    order: [[sortBy, order]],
  });

  const total = await Product.count({
    where: {
      category: 'phones',
      name: {
        [Op.iLike]: `%${query}%`,
      },
      
    }
  });

  return { products, total };
};

export const getRecommended = async (
  id: string,
): Promise<ProductType[] | undefined> => {
  const product = await getById(id);

  if (product !== null) {
    const recommended = await Product.findAll({
      where: {
        category: 'phones',
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

export const getNew = async (): Promise<ProductType[]> => {
  const newProducts = await Product.findAll({
    where: {
      year: '2019',
      category: 'phones',
    },
  });

  return newProducts;
};

export const getDiscountProducts = async (): Promise<ProductType[]> => {
  const discountProducts = await Product.findAll({
    where: { category: 'phones' },
    order: literal('(full_price - price) DESC'),
  });

  return discountProducts;
};
