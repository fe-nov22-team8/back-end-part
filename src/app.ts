import express from 'express';
import cors from 'cors';
import { productRouter } from './routes/products';
import { dbInit } from './utils/initDB';
import { phonesRouter } from './routes/phones';
import { accessoriesRouter } from './routes/accessories';
import { tabletsRouter } from './routes/tablets';

const app = express();

dbInit();

app.use(cors());

app.use(express.static('public'));

app.use('/products', productRouter);
app.use('/phones', phonesRouter);
app.use('/accessories', accessoriesRouter);
app.use('/tablets', tabletsRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
