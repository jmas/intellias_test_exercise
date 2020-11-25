import useFetcher from './useFetcher';
import { Promotion } from '../types';

export default function usePromotion(endpoint: string) {
  return useFetcher<Promotion>(endpoint);
}
