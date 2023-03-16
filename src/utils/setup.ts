import { Phone } from '../model/products';
import { dbInit } from './initDB';

(async () => {
  dbInit();

  await Phone.sync({ alter: true });
})();
