import { Product } from '../../types';

export type IProductsRepo = {
  findOne(id: string): Product|undefined,
  findAll(): Product[],
  findProductsByNameAndVendor(search: string, vendor: string): Product[],
};

export default class ProductsRepo implements IProductsRepo {
  constructor(protected data: { products: Product[] }) {}

  findOne(id: string) {
    return this.data.products.find(product => product.id === id);
  }

  findAll() {
    return this.data.products;
  }

  findProductsByNameAndVendor(name='', vendor='') {
    let products = this.findAll();
    if (name) {
      products = products.filter(product => {
        return product.name.toLocaleLowerCase().includes(String(name || '').toLocaleLowerCase());
      });
    }
    if (vendor) {
      products = products.filter(product => {
        return product.vendor.toLocaleLowerCase() === String(vendor || '').toLocaleLowerCase();
      });
    }
    if (name && vendor) {
      products = products.sort((a, b) => {
        return b.order - a.order;
      });
    }
    return products;
  }
}
