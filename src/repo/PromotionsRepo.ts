import { v4 as uuidv4 } from 'uuid';
import { Promotion } from '../../types';

export type IPromotionsRepo = {
  findOne(): Promotion,
};

export default class PromotionsRepo implements IPromotionsRepo {
  constructor(protected data: { promotion: Partial<Promotion> }) {}

  findOne() {
    return {
      id: uuidv4(),
      text: this.data.promotion.text || '',
      order: this.data.promotion.order || 0,
      hide: this.data.promotion.hide || false,
    };
  }
}
