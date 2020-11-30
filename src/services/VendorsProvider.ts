import { IVendorsRepo } from "../repo/VendorsRepo";

export default class VendorsProvider {
  constructor(protected repo: IVendorsRepo) {}

  getVendors() {
    return this.repo.findAll();
  }
}
