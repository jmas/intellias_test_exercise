import express from 'express';
import services from '../services';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(
    services.products.getProductsWithCache(
      req.query.search as string,
      req.query.vendor as string
    )
  );
});

router.get('/:id', (req, res) => {
  res.send(services.products.getProduct(req.params.id));
});

export default router;
