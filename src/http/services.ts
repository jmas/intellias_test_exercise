import ProductsRepo from './repo/ProductsRepo';
import PromotionsRepo from './repo/PromotionsRepo';
import VendorsRepo from './repo/VendorsRepo';
import CacheProvider from './services/CacheProvider';
import ProductsProvider from './services/ProductsProvider';
import PromotionsProvider from './services/PromotionsProvider';
import VendorsProvider from './services/VendorsProvider';

const productsRepo = new ProductsRepo();
const cache = new CacheProvider();
const products = new ProductsProvider(productsRepo, cache);
const vendorsRepo = new VendorsRepo();
const vendors = new VendorsProvider(vendorsRepo);
const promotionsRepo = new PromotionsRepo();
const promotions = new PromotionsProvider(promotionsRepo);

export default {
  products,
  vendors,
  promotions,
};
