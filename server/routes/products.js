const ROUTER = require('express').Router();

ROUTER.use((req, res, next) => {
  console.log(`TIME: ${Date()}`)
  next();
});

ROUTER.get('/', (req, res) => {
  res.send('Products home page');
});

ROUTER.get('/:id', (req, res) => {
  res.send('Product page based on id');
});

module.exports = ROUTER;
