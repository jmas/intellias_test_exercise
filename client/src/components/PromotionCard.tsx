import React, { useState } from 'react';
import { Card } from 'antd';
import { Promotion } from '../types';

export default function PromotionCard({ promotion, onClick }: { promotion: Promotion, onClick?: () => void }) {
  return (
    <Card
      onClick={onClick}
    >
      <Card.Meta title={promotion.text} />
    </Card>
  );
}
