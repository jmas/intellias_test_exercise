import React from 'react';
import { Link, useParams } from "react-router-dom";
import { Card, List } from 'antd';
import AppLayout from '../components/AppLayout';
import useProductDetails from '../hooks/useProductDetails';
import ProductMediaView from '../components/ProductMediaView';
import { FETCHER_STATUS_FETCHING } from '../hooks/useFetcher';

function ProductsDetailsPage() {
  const { productId } = useParams<{ productId: string }>();
  const [product, productStatus] = useProductDetails(`/products/${productId}`);
  
  return (
    <AppLayout>
      <Card title={product?.name} extra={<Link to="/"><a href="#">Back</a></Link>}>
        <h1>{product?.name}</h1>
        <p>Vendor: {product?.vendor}</p>
        <p>Order: {product?.order}</p>
        <h2>Media:</h2>
        <List
          dataSource={product?.media || []}
          loading={productStatus === FETCHER_STATUS_FETCHING}
          renderItem={media => (
            <List.Item>
              <ProductMediaView key={media.id} media={media} height={300} />
            </List.Item>
          )}
        />
      </Card>
    </AppLayout>
  );
}

export default ProductsDetailsPage;
