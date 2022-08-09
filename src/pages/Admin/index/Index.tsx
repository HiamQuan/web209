import {
    SmileOutlined,
    DownOutlined,
    EditOutlined,
    DeleteFilled,
    DeleteTwoTone,
    DeleteOutlined,
    EditTwoTone,
} from "@ant-design/icons";
import { Menu, Dropdown, Space, Table, Switch } from "antd";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { read } from "../../../api/products";
import { AddIcon, CellPhone, CellSpeaker, Laptop, Tablet } from "../../../assets/image/Frame-1";
import { ProductType } from "../../../type/product";
import "./Index.css";

type Props = {
    products: ProductType[];
};
const Index = (props: Props) => {
    const menu = (
        <Menu
            selectable
            items={[
                {
                    key: "1",
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                            Laptop
                        </a>
                    ),
                    icon: <Laptop />,
                },
                {
                    key: "2",
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            Điện thoại
                        </a>
                    ),
                    icon: <CellPhone />,
                    disabled: false,
                },
                {
                    key: "3",
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                            Âm thanh
                        </a>
                    ),
                    icon: <CellSpeaker />,
                    disabled: false,
                },
                {
                    key: "4",
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                            Máy tính bảng
                        </a>
                    ),
                    icon: <Tablet />,
                },
            ]}
        />
    );

    const onUpdateStatus = async (product: any) => {
        const { data } = await read(product.id);
        const newStatus = !data.status;
        await axios.patch(`http://localhost:3001/products/${product.id}`, { status: newStatus });
    };

    const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Thành tiền",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Mô tả",
            dataIndex: "describe",
            key: "describe",
        },
        {
            title: "Ẩn hiện",
            dataIndex: "status",
            key: "status",
            render: (_: boolean, record: any) => <Switch defaultChecked={_} onClick={() => onUpdateStatus(record)} />,
        },
        {
            title: "Action",
            key: "action",
            render: (_: any, record: any) => (
                <Space size="middle">
                    <Link to={`/admin/${record.id}/edit`}>
                        <EditTwoTone
                            style={{ fontSize: "1.2em", color: "black", border: "2px solid blue", borderRadius: "5px" }}
                        />
                    </Link>
                </Space>
            ),
        },
    ];
    return (
        <div className="tw-min-w-full">
            <div className="header-content tw-flex tw-justify-between tw-pr-16">
                <h2 className="tw-text-3xl tw-font-bold tw-text-gray-500">Điện thoại</h2>
                <Link to="/admin/add">
                    <AddIcon />
                </Link>
            </div>
            <div className="categoryFilter tw-flex tw-gap-12 tw-mt-10 tw-items-center">
                <span className="tw-text-base tw-text-gray-600 tw-font-bold">Bộ lọc</span>
                <div className="dropdownFilter tw-grid tw-grid-row-2 tw-gap-2">
                    <span className="tw-text-base tw-text-gray-600">Danh mục sản phẩm</span>
                    <Dropdown
                        overlay={menu}
                        arrow={{ pointAtCenter: true }}
                        overlayStyle={{ minWidth: "30em", color: "black" }}
                        placement="bottom"
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space size="large">
                                Category
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
            <Table
                style={{ minWidth: "100%", padding: "0", margin: "1.5em 0" }}
                dataSource={props.products}
                columns={columns}
            />
            ;
        </div>
    );
};

export default Index;
