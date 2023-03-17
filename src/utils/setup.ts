/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from '../model/product';
import { dbInit } from './initDB';
// import { products } from './data/products';
import fs from 'fs';
import path from 'path';
import { Test } from '../model/phone';

export const phones: any[] = [];

const jsonsInDir = fs
  .readdirSync('./src/utils/data/phones')
  .filter((file) => path.extname(file) === '.json');

jsonsInDir.forEach((file) => {
  const fileData = fs.readFileSync(path.join('./src/utils/data/phones', file));
  const json = JSON.parse(fileData.toString());
  phones.push(json);
});

(async () => {
  dbInit();

  // await Test.sync({ alter: true });
  await Product.sync({ alter: true });
})();
