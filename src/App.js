import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import SideBar from "./component/sideBar/SideBar";
import DashBoard from "./pages/dashboard/DashBoard";
import Fluctuation from "./pages/Fluctuation/Fluctuations";
import ParityCheck from "./pages/parityCheck/ParityCheck";
import Visibility from "./pages/Visibility/Visibility";
import HeaderComponent from "./component/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notification from "./component/notification/Notification";
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const handleMenuSelect = ({ key }) => {
    setSelectedKey(key);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log(collapsed);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <SideBar collapsed={collapsed} />
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer, // You can change the background color here
              }}
            >
              <div className="flex justify-start">
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
                <HeaderComponent />
              </div>
            </Header>
            <Content
              style={{
                margin: "48px 24px",
                padding: 24,
                minHeight: 500,
                background: colorBgContainer, // You can change the background color here
              }}
            >
              <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/ParityCheck" element={<ParityCheck />} />
                <Route path="/fluctuations" element={<Fluctuation />} />
                <Route path="/visiblity" element={<Visibility />} />
                <Route path="/notification" element={<Notification />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;

