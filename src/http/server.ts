import express from 'express';
import data from '../data/data.json';

const app = express();
const port = process.env.PORT || 3000;
const publicDir = process.env.PUBLIC_DIR || `${__dirname}/public`;

app.use(express.static(publicDir));

app.get('/vendors', (req, res) => {
  res.send(data.vendors);
});

app.get('/products', (req, res) => {
  let products = data.products;
  if (req.query.search) {
    products = products.filter(product => {
      return product.name.toLocaleLowerCase().includes(String(req.query.search || '').toLocaleLowerCase());
    });
  }
  if (req.query.vendor) {
    products = products.filter(product => {
      return product.vendor.toLocaleLowerCase() === String(req.query.vendor || '').toLocaleLowerCase();
    });
  }
  if (req.query.search && req.query.vendor) {
    products = products.sort((a, b) => {
      return b.order - a.order;
    });
  }
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  res.send(data.products.find(product => product.id === req.params.id));
});

app.listen(port, () => {
  console.log(`Public dir: ${publicDir}`)
  console.log(`Example app listening at http://localhost:${port}`)
});
