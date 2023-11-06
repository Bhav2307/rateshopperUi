import React, { useState } from 'react';
import profile from './Profile.svg'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import MainComp from '../main/MainComp';
const { Header, Sider, Content } = Layout;
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: '100vh', width: '100vw' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'DashBoard',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Parity Check',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Reputation',
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Visibility',
            },
            {
              key: '5',
              icon: <UploadOutlined />,
              label: 'fluctuation',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer, // You can change the background color here
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer, // You can change the background color here
          }}
        >
          <MainComp/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;
