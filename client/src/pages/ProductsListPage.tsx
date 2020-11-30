import React, { useState } from 'react';
import {  List, Form, Select, Input, Space } from 'antd';
import AppLayout from '../components/AppLayout';
import { useHistory } from "react-router-dom";
import useProducts from '../hooks/useProducts';
import useVendors from '../hooks/useVendors';
import ProductCard from '../components/ProductCard';
import { FETCHER_STATUS_FETCHING } from '../hooks/useFetcher';
import usePromotion from '../hooks/usePromotion';
import { Product, Promotion } from '../../../types';
import PromotionCard from '../components/PromotionCard';

function ProductsListPage() {
  const history = useHistory();
  const [filter, setFilter] = useState({ search: '', vendor: '' });
  const [products, productsStatus] = useProducts(`/products?search=${filter.search || ''}&vendor=${filter.vendor || ''}`);
  const [promotion] = usePromotion(`/promotions/default`);
  const [vendors] = useVendors('/vendors');
  
  const productsWithPromotion = products?.reduce<{ item: Product|Promotion, type: string }[]>((items, item, index) => {
    if (promotion && promotion.order === index + 1) {
      return [...items, { item, type: 'product' }, { item: promotion, type: 'promotion' }];
    }
    return [...items, { item, type: 'product' }];
  }, []);
  
  return (
    <AppLayout>
      <Space direction="vertical" size="middle">
        <Form layout="inline" onValuesChange={(changedValues, allValues) => setFilter(allValues)}>
          <Form.Item name="search">
            <Input placeholder="Search" />
          </Form.Item>
          <Form.Item name="vendor">
            <Select
              allowClear
              style={{ width: 200 }}
              placeholder="Vendor"
            >
              {vendors?.map(vendor => <Select.Option key={vendor.name} value={vendor.name}>{vendor.name}</Select.Option>)}
            </Select>
          </Form.Item>
        </Form>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={productsWithPromotion || []}
          loading={productsStatus === FETCHER_STATUS_FETCHING}
          renderItem={item => (
            <List.Item>
              {item.type === 'product' ? (
                <ProductCard product={item.item as Product} onClick={() => history.push(`/products/${(item.item as Product).id}`)} />
              ) : (
                <PromotionCard promotion={item.item as Promotion} />
              )}
            </List.Item>
          )}
        />
      </Space>
    </AppLayout>
  );
}

export default ProductsListPage;
