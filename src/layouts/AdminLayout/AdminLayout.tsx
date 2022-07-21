import "./AdminLayout.css";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { Input } from "antd";
import React from "react";
import logo from "../../assets/image/logo.png";
import search from "../../assets/image/vector.png";
import { Laptop, CellSpeaker, Tablet, CellPhone } from "../../assets/image/Frame-1";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const menuItem = ["Điện thoại", "Laptop", "Máy tính bảng", "Âm thanh"];
const items2 = [CellPhone, Laptop, Tablet, CellSpeaker].map((icon, index) => {
    const key: string = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `${menuItem[index]}`,
    };
});

const AdminLayout = () => (
    <Layout className="tw-min-h-screen">
        <Header
            style={{ backgroundColor: "#00B0D7" }}
            className="header tw-flex tw-justify-between tw-items-center tw-pl-5 tw-pr-10"
        >
            <div className="header-left tw-flex tw-items-center">
                <div className="logo tw-w-4/12 tw-mx-0">
                    <img src={logo} alt="" className="tw-w-full" />
                </div>
                <p className="tw-text-base tw-text-white tw-mx-4">Dashboard</p>
                <Input
                    size="large"
                    className="tw-ml-16"
                    style={{ minWidth: "45em", borderRadius: "10px" }}
                    placeholder=""
                    prefix={<img src={search} alt="" />}
                />
            </div>
            <div className="header-right">
                <h4 className="tw-text-white tw-font-semibold tw-text-lg tw-mr-5">Xin Chào Nguyễn Anh Quân</h4>
            </div>
        </Header>
        <Layout>
            <Sider width={330} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    theme="light"
                    style={{
                        height: "100%",
                        borderRight: 0,
                        padding: "1em 0",
                    }}
                    items={items2}
                />
            </Sider>
            <Layout
                style={{
                    padding: "0 20px 24px 0",
                }}
            >
                <Content
                    className="site-layout-background"
                    style={{
                        padding: "2em 0 2em 2em",
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default AdminLayout;
