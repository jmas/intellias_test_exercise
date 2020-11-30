import express from 'express';
import services from '../services';

const router = express.Router();

router.get('/:id', (req, res) => {
  res.send(services.promotions.getPromotion());
});

export default router;
