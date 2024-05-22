"use client";
import { Layout, Menu, MenuProps } from "antd";
import Link from "next/link";
import { ReactNode } from "react";
const { Header, Content, Footer, Sider } = Layout;
import { GoHome } from "react-icons/go";

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: "Dashboard",
    children: [
      {
        key: "All Donation",
        label: <Link href='/dashboard/all-products'>All Products</Link>,
      },
      {
        key: "Create Product",
        label: <Link href='/dashboard/create-product'>Create Product</Link>,
      },
      {
        key:'Create Brand',
        label: <Link href='/dashboard/create-brand'>Create Brand</Link>,
      }
    ],
  },
];

const DashboardLayout = ({children}:{children:ReactNode}) => {
  return (
    <Layout style={{ backgroundColor: "#008080" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
         <Link href='/'>
         <GoHome
            style={{ fontSize: "40px", textAlign: "center", color: "white",marginTop:'10px' }}
          /></Link>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
