import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currency } from "../../../utils/helpers";
import CartItem from "./cart-item/CartItem";
import styles from "./CartPage.module.css";

const CartPage = () => {
    const cart = useSelector((store: any) => store.cart.cart);
    const total = useSelector((state: any) => state.cart.total);
    const navigate = useNavigate();
    const backToProductPage = () => {
        navigate("/");
    };
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div onClick={backToProductPage}>
                    <ArrowLeftOutlined /> Trở về
                </div>
                <h2>Giỏ hàng</h2>
                <div></div>
            </div>
            <div className={styles.content}>
                {cart && cart.map((item: any, index: any) => <CartItem data={item} key={index} />)}
                <div className={styles.footer}>
                    <div className={styles.total}>
                        <div className={styles.total_text}>Tổng tiền tạm tính</div>
                        <div className={styles.total_price}>{total && currency(total)} ₫</div>
                    </div>
                    <div className={styles.group__btn}>
                        <button>Tiến hành đặt hàng</button>
                        <button>Chọn thêm sản phẩm khác</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
