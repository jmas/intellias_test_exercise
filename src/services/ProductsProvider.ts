import { IProductsRepo } from "../repo/ProductsRepo";
import { ICacheProvider } from "./CacheProvider";

export default class ProductsProvider {
  constructor(protected repo: IProductsRepo, protected cache: ICacheProvider) {}

  getProduct(id: string) {
    return this.repo.findOne(id);
  }

  getProductsWithCache(search: string, vendor: string) {
    const cacheKey = `getProducts#${search}#${vendor}`;
    let products = this.cache.get(cacheKey);
    if (!products) {
      products = this.repo.findProductsByNameAndVendor(search, vendor);
      const ttlInSec = 5 * 60;
      this.cache.set(cacheKey, products, ttlInSec);
    }
    return products;
  }
}
