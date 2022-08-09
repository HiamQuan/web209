import React, { useState } from "react";
import logo from "../../assets/image/logo.png";
import vector from "../../assets/image/vector.png";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import style from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AutoComplete, Button } from "antd";
import formSlice from "./form/FormSlice";
import axios from "axios";

library.add(fas, far);
const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
});

const Header = () => {
    const [value, setValue] = useState("");
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const user = useSelector((state: any) => state.auth.user);
    const onSearch = (searchText: string) => {
        const getProduct = async () => {
            const { data } = await axios.get(`http://localhost:3001/product?name_like=${searchText}`);
            !searchText ? [] : mockVal(data);
        };
        getProduct();
    };

    const onSelect = (data: string) => {
        console.log("onSelect", data);
    };

    const onChange = (data: string) => {
        setValue(data);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                    <AutoComplete
                        value={value}
                        options={options}
                        style={{ width: 400 }}
                        onSelect={onSelect}
                        onSearch={onSearch}
                        onChange={onChange}
                        placeholder=""
                    />
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
                            <Link to={"/cart"} className="tw-flex tw-flex-col">
                                <span>Giỏ</span>
                                <span>hàng</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {user && user.id !== null ? (
                    <button
                        style={{
                            color: "white",
                            fontSize: "2em",
                            border: "2px solid white",
                            borderRadius: "10px",
                            padding: "0 1em",
                        }}
                        onClick={() => {
                            dispatch(formSlice.actions.signout);
                            navigate("/");
                        }}
                    >
                        SignOut
                    </button>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

const Logo = style.div`
    max-width: 65px;
    height: auto;
`;

export default Header;
