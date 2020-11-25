import React from 'react';
import { ProductMedia } from '../types';

export default function ProductMediaView({ media, height=150, onClick }: { media: ProductMedia, height?: number, onClick?: () => void }) {
  return (
    <div key={media.id} onClick={onClick} style={{ padding: '5px' }}>
      {media.type === 'video' ? (
        <video controls src={media.url} width="100%" height={height} />
      ) : (
        <img src={media.url} width="100%" height={height} style={{ objectFit: 'contain', cursor: 'pointer' }} />
      )}
    </div>
  );
}
