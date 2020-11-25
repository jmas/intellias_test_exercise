import React, { useState } from 'react';
import { Card } from 'antd';
import { Product } from '../types';
import ProductMediaView from './ProductMediaView';

export default function ProductCard({ product, onClick }: { product: Product, onClick?: () => void }) {
  const [vidioDisplaying, setVideoDisplaying] = useState<boolean>(false);

  const [media] = product.media.filter(media => {
    if (vidioDisplaying) {
      return media.type === 'video';
    }
    return media.type === 'image';
  });

  return (
    <Card
      cover={<ProductMediaView media={media} onClick={() => setVideoDisplaying(true)} />}
      onClick={onClick}
    >
      <Card.Meta title={product.name} description={product.vendor} />
    </Card>
  );
}
