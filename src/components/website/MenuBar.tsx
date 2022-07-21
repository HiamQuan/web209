import { Menu } from "antd";
import React, { useState } from "react";
import banner from "../../assets/image/banner.png";
import frame from "../../assets/image/frame.png";
import frame1 from "../../assets/image/frame-1.png";
import {
    AppstoreOutlined,
    MailOutlined,
    PhoneOutlined,
    PhoneTwoTone,
    RightOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import IconImage from "./IconImage";

function getItem(label: any, key: any, icon?: any, children?: any, type?: any) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem("Điện thoại", "sub1", <IconImage src={frame} />, [
        getItem("Option 1", "1"),
        getItem("Option 2", "2"),
        getItem("Option 3", "3"),
        getItem("Option 4", "4"),
    ]),
    getItem("Laptop", "sub2", <IconImage src={frame1} />, [
        getItem("Option 5", "5"),
        getItem("Option 6", "6"),
        getItem("Submenu", "sub3", null, [getItem("Option 7", "7"), getItem("Option 8", "8")]),
    ]),
    getItem("Máy tính bảng", "sub4", <SettingOutlined />, [
        getItem("Option 9", "9"),
        getItem("Option 10", "10"),
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
    ]),
]; // submenu keys of first level

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const MenuBar = () => {
    const [openKeys, setOpenKeys] = useState(["sub1"]);

    const onOpenChange = (keys: any) => {
        const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <div className="tw-flex">
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{
                    width: 490,
                    border: "none",
                }}
                items={items}
            />
            <div className="banner tw-ml-10">
                <img src={banner} alt="" className="img-fluid" />
            </div>
        </div>
    );
};

export default MenuBar;
