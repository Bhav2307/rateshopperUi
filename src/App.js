import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
import SideBar from './component/sideBar/SideBar';
import AppRouter from './AppRouter';
import HeaderComponent from './component/header/Header'
const { Header, Sider, Content } = Layout;

const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const handleMenuSelect = ({ key }) => {
    setSelectedKey(key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log(collapsed);
  return (
    <>
      <Layout>
      <SideBar collapsed={collapsed}/>
      <Layout >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer, // You can change the background color here
          }}
        >
          <div className='flex justify-start'>
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
          <HeaderComponent />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer, // You can change the background color here
          }}
        >
          <AppRouter />
        </Content>
      </Layout>
    </Layout>
    </>
  )
}

export default App