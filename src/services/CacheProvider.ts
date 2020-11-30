import NodeCache from 'node-cache';

export type ICacheProvider = {
  set(key: string, val: any, ttlInSec: number): void;
  get(key: string): any;
};

export default class CacheProvider implements ICacheProvider {
  protected cache: NodeCache;

  constructor() {
    this.cache = new NodeCache();
  }

  set(key: string, val: any, ttl: number = 0) {
    this.cache.set(key, val, ttl);
  }

  get(key: string): any {
    return this.cache.get(key);
  }
}
