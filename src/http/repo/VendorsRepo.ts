import data from '../../data/data.json';
import { Vendor } from '../../../types';

export type IVendorsRepo = {
  findAll(): Vendor[],
};

export default class VendorsRepo implements IVendorsRepo {
  findAll() {
    return data.vendors.map(item => ({
      id: item,
      name: item,
    }));
  }
}
