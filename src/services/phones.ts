import { Phone } from '../model/product';
import { Phone as PhoneType } from '../types/phone';

export const getAll = async (): Promise<PhoneType[]> => {
  const phones = await Phone.findAll();

  return phones;
};
