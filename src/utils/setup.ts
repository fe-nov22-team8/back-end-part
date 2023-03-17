import { Product } from '../model/product';
import { dbInit } from './initDB';
import fs from 'fs';
import path from 'path';
import { Phone } from '../model/phone';
import { products } from './data/products';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const phones: any[] = [];

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

  await Phone.bulkCreate(phones);

  await Product.bulkCreate(products);

  await Phone.sync({ alter: true });
  
  await Product.sync({ alter: true });
})();
