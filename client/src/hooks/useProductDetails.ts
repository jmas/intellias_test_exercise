import useFetcher from './useFetcher';
import { Product } from '../types';

export default function useProductDetails(endpoint: string) {
  return useFetcher<Product>(endpoint);
}
