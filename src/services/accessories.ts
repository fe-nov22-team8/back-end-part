import { Accessory } from '../types/accessory';

const accessories = [
  {
    id: 1,
    category: 'accessories',
    itemId: 'apple-airpods-two',
    name: 'Apple AirPods 1-2 with Charging Case',
    fullPrice: 300,
    price: 249,
    color: 'white',
    year: 2019,
    image: '/img/airpods/two.png',
  },
  {
    id: 2,
    category: 'accessories',
    itemId: 'apple-airpods-pro',
    name: 'Apple AirPods Pro with Magsafe Case',
    fullPrice: 300,
    price: 249,
    color: 'white',
    year: 2020,
    image: '/img/airpods/pro.png',
  },
  {
    id: 3,
    category: 'accessories',
    itemId: 'apple-airpods-three',
    name: 'Apple AirPods 3 with MagSafe Charging Case',
    fullPrice: 210,
    price: 179,
    color: 'white',
    year: 2021,
    image: 'img/airpods/three.png',
  },
  {
    id: 4,
    category: 'accessories',
    itemId: 'apple-airpods-max',
    name: 'Apple AirPods Max',
    fullPrice: 620,
    price: 559,
    color: 'white',
    year: 2020,
    image: 'img/airpods/max.png',
  },
];

export const getAll = (): Accessory[] => {
  return accessories;
};
