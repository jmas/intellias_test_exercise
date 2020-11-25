import React, { useState } from 'react';
import {  List, Form, Select, Input, Space } from 'antd';
import AppLayout from '../components/AppLayout';
import { useHistory } from "react-router-dom";
import useProducts from '../hooks/useProducts';
import useVendors from '../hooks/useVendors';
import ProductCard from '../components/ProductCard';
import { FETCHER_STATUS_FETCHING } from '../hooks/useFetcher';

function ProductsListPage() {
  const history = useHistory();
  const [filter, setFilter] = useState({ search: '', vendor: '' });
  const [products, productsStatus] = useProducts(`/products?search=${filter.search || ''}&vendor=${filter.vendor || ''}`);
  const [vendors] = useVendors('/vendors');
  
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
              {vendors.map(vendor => <Select.Option key={vendor.name} value={vendor.name}>{vendor.name}</Select.Option>)}
            </Select>
          </Form.Item>
        </Form>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={products || []}
          loading={productsStatus === FETCHER_STATUS_FETCHING}
          renderItem={product => (
            <List.Item>
              <ProductCard product={product} onClick={() => history.push(`/products/${product.id}`)} />
            </List.Item>
          )}
        />
      </Space>
    </AppLayout>
  );
}

export default ProductsListPage;
