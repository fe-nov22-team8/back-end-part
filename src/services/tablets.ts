import { Product as Tablet } from '../models/product';

export const getAll = async () => {
  const tablets = await Tablet.findAll({
    where: { category: 'tablets' },
  });

  return tablets;
};
