import useFetcher from './useFetcher';
import { Vendor } from '../types';

export default function useProducts(endpoint: string): [Vendor[], string] {
  const [items, status] = useFetcher<string[]>(endpoint);
  return [items ? items.map<Vendor>(name => ({ name })) : [], status];
}
