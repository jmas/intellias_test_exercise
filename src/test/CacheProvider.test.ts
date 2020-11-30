import CacheProvider from '../services/CacheProvider';

test('store and read variable from cache', () => {
  const cache = new CacheProvider();
  cache.set('test', 'test');
  expect(cache.get('test')).toBe('test');
});
