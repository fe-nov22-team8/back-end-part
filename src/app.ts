import express from 'express';
import cors from 'cors';
import { phoneRouter } from './routes/phones';

const app = express();

app.use(cors());

app.use(express.static('public'));

app.use('/phones', phoneRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
