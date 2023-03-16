import express from 'express';
import cors from 'cors';
import { productRouter } from './routes/products';
import { dbInit } from './utils/initDB';

const app = express();

dbInit();

app.use(cors());

app.use(express.static('public'));

app.use('/products', productRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
