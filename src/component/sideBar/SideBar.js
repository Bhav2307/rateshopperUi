import React, { useState } from "react";
import { icons } from "./Icons";
import logo from "../../component/utils/Logo.png";
import smallbglogo from "../../component/utils/smallbglogo.png";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

const { Sider } = Layout;
const SideBar = ({ collapsed }) => {
  const [selectedKey, setSelectedKey] = useState("1");
  const handleMenuSelect = ({ key }) => {
    setSelectedKey(key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
      <div className="demo-logo-vertical" />
      {collapsed ? (
        <div className="flex justify-center items-center">
          <img src={smallbglogo} alt="logo" className="h-10 w-10 mt-5 mb-2" />
        </div>
      ) : (
        <div className="flex justify-end ml-8 mt-3 mb-2">
          <img src={logo} alt="logo" className="min-w-[140%]" />
        </div>
      )}
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
  );
};

export default SideBar;
