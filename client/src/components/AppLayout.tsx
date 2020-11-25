import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Content className="AppLayout-content">
        {children}
      </Content>
    </Layout>
  );
}
