'use strict';

import { Phone } from '../model/phones';
import { dbInit } from './initDB';

(async () => {
  dbInit();

  await Phone.sync({ alter: true });

  console.log('synced!');
})();
