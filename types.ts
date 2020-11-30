export type ProductMedia = {
  id: string,
  type: string,
  url: string,
};

export type Product = {
  id: string,
  name: string,
  order: number,
  vendor: string,
  media: ProductMedia[],
};

export type Vendor = {
  id: string,
  name: string,
};

export type Promotion = {
  id: string,
  text: string,
  order: number,
  hide: boolean,
};
