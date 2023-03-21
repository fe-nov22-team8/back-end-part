import { Product } from '../models/product';
import { dbInit } from './initDB';
import { Phone } from '../models/phone';

(async () => {
  dbInit();

  await Phone.sync({ alter: true });

  await Product.sync({ alter: true });
})();
