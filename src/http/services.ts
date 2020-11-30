import ProductsRepo from './repo/ProductsRepo';
import PromotionsRepo from './repo/PromotionsRepo';
import VendorsRepo from './repo/VendorsRepo';
import ProductsProvider from './services/ProductsProvider';
import PromotionsProvider from './services/PromotionsProvider';
import VendorsProvider from './services/VendorsProvider';

const productsRepo = new ProductsRepo();
const products = new ProductsProvider(productsRepo);
const vendorsRepo = new VendorsRepo();
const vendors = new VendorsProvider(vendorsRepo);
const promotionsRepo = new PromotionsRepo();
const promotions = new PromotionsProvider(promotionsRepo);

export default {
  products,
  vendors,
  promotions,
};
