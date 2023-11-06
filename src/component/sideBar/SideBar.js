import React, { useState } from 'react';
import { icons } from './Icons';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import logo from '../../component/utils/Logo.png';
import smallbglogo from '../../component/utils/smallbglogo.png';
import { Layout, Menu, Button, theme } from 'antd';
import MainComp from '../main/MainComp';
const { Header, Sider, Content } = Layout;
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const handleMenuSelect = ({ key }) => {
    setSelectedKey(key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: '100vh', width: '100vw' }} >
      <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
        <div className="demo-logo-vertical" />
        {collapsed ?
          <div className='flex justify-center items-center' >
            <img src={smallbglogo} alt='logo' className='h-10 w-10 mt-5 mb-2' />
          </div>
          :
          <div className='flex justify-end ml-8 mt-3 mb-2' >
            <img src={logo} alt='logo' className='min-w-[140%]' />
          </div>
        }
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]} // Pass the selected key as an array
          onSelect={handleMenuSelect} // Add a handler for menu item selection
          items={[
            {
              key: '1',
              icon: icons.dashbord,
              label: 'DashBoard',
              style: {
                backgroundColor: selectedKey === '1' && '#5932EA',
                color: selectedKey === '1' && '#fff',
              }
            },
            {
              key: '2',
              icon: icons.reputation,
              label: 'Parity Check',
              style: {
                backgroundColor: selectedKey === '2' && '#5932EA',
                color: selectedKey === '2' && '#fff',
              }
            },
            {
              key: '3',
              icon: icons.reputation,
              label: 'Reputation',
              style: {
                backgroundColor: selectedKey === '3' && '#5932EA',
                color: selectedKey === '3' && '#fff',
              }
            },
            {
              key: '4',
              icon: icons.visibilty,
              label: 'Visibility',
              style: {
                backgroundColor: selectedKey === '4' && '#5932EA',
                color: selectedKey === '4' && '#fff',
              }
            },
            {
              key: '5',
              icon: icons.fluctuation,
              label: 'fluctuation',
              style: {
                backgroundColor: selectedKey === '5' && '#5932EA',
                color: selectedKey === '5' && '#fff',
              }
            },
            {
              key: '6',
              icon: icons.calender,
              label: 'Calender',
              style: {
                backgroundColor: selectedKey === '6' && '#5932EA',
                color: selectedKey === '6' && '#fff',
              }
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
          <MainComp />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;