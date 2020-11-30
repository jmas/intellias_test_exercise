import ProductsRepo from '../repo/ProductsRepo';

test('can find product by ID', () => {
  const products = new ProductsRepo({
    products: [
      {
        id: '1',
        media: [],
        name: 'Product1',
        order: 0,
        vendor: 'Vendor'
      },
    ]
  });
  expect(products.findOne('1')).toEqual({
    id: '1',
    media: [],
    name: 'Product1',
    order: 0,
    vendor: 'Vendor'
  });
});

test('can find all products', () => {
  const products = new ProductsRepo({
    products: [
      {
        id: '1',
        media: [],
        name: 'Product1',
        order: 0,
        vendor: 'Vendor'
      },
      {
        id: '2',
        media: [],
        name: 'Product2',
        order: 1,
        vendor: 'Vendor'
      },
    ]
  });
  expect(products.findAll()).toEqual([
    {
      id: '1',
      media: [],
      name: 'Product1',
      order: 0,
      vendor: 'Vendor'
    },
    {
      id: '2',
      media: [],
      name: 'Product2',
      order: 1,
      vendor: 'Vendor'
    },
  ]);
});

test('can find products by name and vendor', () => {
  const products = new ProductsRepo({
    products: [
      {
        id: '1',
        media: [],
        name: 'Product1',
        order: 0,
        vendor: 'Vendor1'
      },
      {
        id: '2',
        media: [],
        name: 'Product2',
        order: 1,
        vendor: 'Vendor2'
      },
    ]
  });
  expect(products.findProductsByNameAndVendor('Product1')).toEqual([
    {
      id: '1',
      media: [],
      name: 'Product1',
      order: 0,
      vendor: 'Vendor1'
    },
  ]);
  expect(products.findProductsByNameAndVendor('Product2')).toEqual([
    {
      id: '2',
      media: [],
      name: 'Product2',
      order: 1,
      vendor: 'Vendor2'
    },
  ]);
  expect(products.findProductsByNameAndVendor('', 'Vendor1')).toEqual([
    {
      id: '1',
      media: [],
      name: 'Product1',
      order: 0,
      vendor: 'Vendor1'
    },
  ]);
  expect(products.findProductsByNameAndVendor('', 'Vendor2')).toEqual([
    {
      id: '2',
      media: [],
      name: 'Product2',
      order: 1,
      vendor: 'Vendor2'
    },
  ]);
});
