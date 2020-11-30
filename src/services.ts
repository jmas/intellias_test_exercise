import data from './data/data.json';
import ProductsRepo from './repo/ProductsRepo';
import PromotionsRepo from './repo/PromotionsRepo';
import VendorsRepo from './repo/VendorsRepo';
import CacheProvider from './services/CacheProvider';
import ProductsProvider from './services/ProductsProvider';
import PromotionsProvider from './services/PromotionsProvider';
import VendorsProvider from './services/VendorsProvider';

const productsRepo = new ProductsRepo(data);
const vendorsRepo = new VendorsRepo(data);
const promotionsRepo = new PromotionsRepo(data);
const cache = new CacheProvider();
const products = new ProductsProvider(productsRepo, cache);
const vendors = new VendorsProvider(vendorsRepo);
const promotions = new PromotionsProvider(promotionsRepo);

export default {
  products,
  vendors,
  promotions,
};
