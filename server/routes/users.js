import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('<h1>test the get</h1>');
});

router.post('/add', (req, res) => {
  console.log(req.body);
  res.status(201);
  res.json(JSON.stringify({ status: 201, message: 'year, we got oit' }));
});

export default router;
