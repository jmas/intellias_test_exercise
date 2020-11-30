import { v4 as uuidv4 } from 'uuid';
import data from '../../data/data.json';
import { Promotion } from '../../../types';

export type IPromotionsRepo = {
  findOne(): Promotion,
};

export default class PromotionsRepo implements IPromotionsRepo {
  findOne() {
    return {
      ...data.promotion,
      id: uuidv4(),
    };
  }
}
