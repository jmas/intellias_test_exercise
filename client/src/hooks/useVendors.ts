import useFetcher from './useFetcher';
import { Vendor } from '../../../types';

export default function useProducts(endpoint: string) {
  return useFetcher<Vendor[]>(endpoint);
}
