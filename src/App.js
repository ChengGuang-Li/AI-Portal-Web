import React, { useState, useEffect } from "react";
import "./index.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Drawer } from "antd";
import "./App.css";
import Contents from "./components/Contents ";
import { aiWritting } from "./constants/aiWritting";

import Card from "./components/CardNew";
import Logo from "./components/Logo";
import DrawerNew from "./components/Drawer";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState(aiWritting);
  const [selectItem, setSelectItem] = useState("1");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000); // Check if the device is mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const getItem = (key, label, icon, content, children) => {
    return {
      key,
      label,
      icon,
      content,
      children,
    };
  };

  const menuItems = [
    getItem("1", "AI Writting", <UserOutlined />, <Contents />, ""),
    getItem("2", "AI Picture", <UserOutlined />, <Card />, ""),
    getItem("3", "AI Video", <UserOutlined />, <Contents />, ""),
  ];

  const handleClick = (e) => {
    setSelectItem(e.key);
  };

  return (
    <Layout>
      {isMobile ? (
        <DrawerNew
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          menuItems={menuItems}
          handleClick={handleClick}
        />
      ) : (
        <Sider
          // breakpoint="lg"
          // collapsedWidth="0"
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ minHeight: "100vh", backdropFilter: "blur(5)" }}
          theme="light"
          // onBreakpoint={(broken) => {
          //   console.log(broken);
          // }}
          // onCollapse={(collapsed, type) => {
          //   console.log(collapsed, type);
          // }}
        >
          <Logo collapsed={collapsed} />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ marginTop: "40px" }}
            items={menuItems}
            onClick={handleClick}
          />
        </Sider>
      )}
      <Layout style={{ background: "#f8f8f8" }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            minHeight: 280,
            background: "#f8f8f8",
          }}
        >
          {selectItem == "1" ? <Contents data={data} /> : <Card></Card>}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
