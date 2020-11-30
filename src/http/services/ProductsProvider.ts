import { IProductsRepo } from "../repo/ProductsRepo";

export default class ProductsProvider {
  constructor(protected repo: IProductsRepo) {}

  getProduct(id: string) {
    return this.repo.findOne(id);
  }

  getProducts(search: string, vendor: string) {
    return this.repo.findProductsByNameAndVendor(search, vendor);
  }
}
