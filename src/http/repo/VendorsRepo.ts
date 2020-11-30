import { Vendor } from '../../../types';

export type IVendorsRepo = {
  findAll(): Vendor[],
};

export default class VendorsRepo implements IVendorsRepo {
  constructor(protected data: { vendors: string[] }) {}

  findAll() {
    return this.data.vendors.map(item => ({
      id: item,
      name: item,
    }));
  }
}
