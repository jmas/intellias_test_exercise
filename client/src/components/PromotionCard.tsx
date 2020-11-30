import React, { useState } from 'react';
import { Card } from 'antd';
import { Promotion } from '../../../types';

export default function PromotionCard({ promotion, onClick }: { promotion: Promotion, onClick?: () => void }) {
  return (
    <Card
      style={{ height: 257, backgroundColor: '#f0f0f0' }}
      onClick={onClick}
    >
      <Card.Meta title={promotion.text} />
    </Card>
  );
}
