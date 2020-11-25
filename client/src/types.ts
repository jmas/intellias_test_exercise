export type ProductMedia = {
  id: string,
  type: string,
  url: string,
};

export type Product = {
  id: string,
  name: string,
  order: string,
  vendor: string,
  media: ProductMedia[],
};

export type Vendor = {
  name: string,
};

export type Promotion = {
  text: string,
  order: number,
  hide: boolean,
};
