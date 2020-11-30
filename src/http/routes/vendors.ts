import express from 'express';
import services from '../services';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(services.vendors.getVendors());
});

export default router;
