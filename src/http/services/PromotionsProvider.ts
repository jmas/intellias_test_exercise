import { IPromotionsRepo } from "../repo/PromotionsRepo";

export default class PromotionsProvider {
  constructor(protected repo: IPromotionsRepo) {}

  getPromotion() {
    return this.repo.findOne();
  }
}
