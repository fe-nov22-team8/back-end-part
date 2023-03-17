import express from 'express';
import cors from 'cors';
import { productRouter } from './routes/products';
import { dbInit } from './utils/initDB';
import { phonesRouter } from './routes/phones';

const app = express();

dbInit();

app.use(cors());

app.use(express.static('public'));

app.use('/products', productRouter);
app.use('/phones', phonesRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
