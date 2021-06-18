const EXPRESS = require('express');
const PROMISE = require('bluebird');
const FETCH = require('axios');
const PRODUCTS_ROUTES = require('./routes/products');

const APP = EXPRESS();
const PORT = 8080;

APP.use(EXPRESS.static('public'));
APP.use('/products', PRODUCTS_ROUTES);

APP.get('/', (req, res) => {
  
});

APP.listen(PORT, () => {
  console.log(`LISTENING ON PORT: ${PORT}`);
});
