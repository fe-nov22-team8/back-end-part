import { phones } from "../utils/setup";
import { Phone } from '../types/phone';

export const getAll = (): Phone[] => {
  return phones;
};

export const getById = (id: string): Phone | null => {
  const phone = phones.find(phone => phone.id === id);

  return phone || null;
}
