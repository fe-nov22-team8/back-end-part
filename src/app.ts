import express from 'express';

const app = express();

app.use('/', (req, res) => {
  res.send('Hello World!');
});

const port = 5000;

app.listen(port, () => {
  // console.log(`Server running at http://localhost:${port}`);
});
