import React from "react";
import logo from "../../assets/image/logo.png";
import vector from "../../assets/image/vector.png";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import style from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

library.add(fas, far);

const Header = () => {
    return (
        <div className="tw-bg-red-500 tw-px-72 tw-py-1">
            <div className="tw-flex tw-justify-between tw-items-center">
                <Logo className="logo">
                    <img src={logo} alt="" className="img-fluid" />
                </Logo>
                <form className="tw-flex tw-items-center tw-relative">
                    <div className="tw-absolute tw-left-2">
                        <img src={vector} alt="" className="img-fluid" />
                    </div>
                    <input type="text" className="tw-rounded-lg tw-w-96 tw-py-2" />
                </form>
                <nav className="">
                    <ul className="tw-text-white menu">
                        <li>
                            <a href="">Gọi mua hàng 18001092</a>
                        </li>
                        <li className="tw-gap-3">
                            <i className="fas fa-map-marker-alt tw-text-2xl"></i>
                            <a href="">Cửa hàng gần bạn</a>
                        </li>
                        <li className="tw-gap-3">
                            <i className="fas fa-shipping-fast tw-text-2xl"></i>
                            <a href="">Tra cứu đơn hàng</a>
                        </li>
                        <li className="tw-gap-3">
                            <ShoppingOutlined style={{ fontSize: "2em" }} />
                            <Link to={"/"} className="tw-flex tw-flex-col">
                                <span>Giỏ</span>
                                <span>hàng</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

const Logo = style.div`
    max-width: 65px;
    height: auto;
`;

export default Header;
