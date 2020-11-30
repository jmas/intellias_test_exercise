import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
const publicDir = process.env.PUBLIC_DIR || `${__dirname}/public`;

app.use(express.static(publicDir));

app.use('/products', require('./routes/products').default);
app.use('/promotions', require('./routes/promotions').default);
app.use('/vendors', require('./routes/vendors').default);

app.listen(port, () => {
  console.log(`Public dir: ${publicDir}`)
  console.log(`Example app listening at http://localhost:${port}`)
});
