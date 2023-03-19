import { Phone } from '../models/phone';
import { Phone as PhoneType } from '../types/phone';

export const getAll = async (): Promise<PhoneType[]> => {
  const phones = await Phone.findAll();

  return phones;
};

export const getById = async (id: string): Promise<PhoneType | null> => {
  const phone = await Phone.findByPk(id);

  return phone || null;
};
