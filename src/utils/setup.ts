
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from '../model/product';
import { dbInit } from './initDB';
// import { products } from './data/products';
import fs from 'fs';
import path from 'path';
import { Test } from '../model/phone';

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

  const a = phones.map((phone) => {
    const { id, namespaceId, capacityAvailable } = phone;
  
    return {
      id,
      namespaceId,
      capacityAvailable,
    }
  }
)

  await Test.bulkCreate(a);

  // const a = products.map(prod => {
  //   const {
  //     category,
  //     phoneId,
  //     itemId,
  //     name,
  //     fullPrice,
  //     price,
  //     screen,
  //     capacity,
  //     color,
  //     ram,
  //     year,
  //     image
  //   } = prod;

  //   return {
  //     category,
  //     phoneId,
  //     itemId,
  //     name,
  //     fullPrice,
  //     price,
  //     screen,
  //     capacity,
  //     color,
  //     ram,
  //     year,
  //     image
  //   }
  // })

  // await Product.bulkCreate(a)

  await Test.sync({ alter: true });
  await Product.sync({ alter: true });
})();
