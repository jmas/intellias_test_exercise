import useFetcher from './useFetcher';
import { Product } from '../types';

export default function useProducts(endpoint: string) {
  return useFetcher<Product[]>(endpoint);
}
