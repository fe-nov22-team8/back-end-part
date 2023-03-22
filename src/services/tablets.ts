import { Product } from '../models/product';
import { Product as ProductType } from '../types/product';
import { Phone as Tablet } from '../models/phone';
import { Phone as TabletType } from '../types/phone';

export const getAll = async (): Promise<ProductType[]> => {
  const tablets = await Product.findAll({
    where: { category: 'tablets' },
  });

  return tablets;
};

export const getInfo = async (id: string): Promise<TabletType | null> => {
  const tabletInfo = await Tablet.findByPk(id);

  return tabletInfo || null;
};
