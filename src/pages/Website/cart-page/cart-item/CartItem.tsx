import { CloseOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { currency } from "../../../../utils/helpers";
import cartSlice from "../CartSlice";
import styles from "./CartItem.module.css";

type Props = {
    data: any;
};
const CartItem = ({ data }: Props) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <img src={data.img} alt="" />
                </div>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h3 className={styles.name}>{data.name}</h3>
                        <CloseOutlined />
                    </div>
                    <div className={styles.price}>
                        <div className={styles.price__sale}>{currency(data.salePrice)} ₫</div>
                        <div className={styles.price__origin}>{currency(data.price)} ₫</div>
                        <div className={styles.price__percent}>Giảm 27%</div>
                    </div>
                    <div className={styles.quantity}>
                        <span>Chọn số lượng</span>
                        <div className={styles.group_quantity}>
                            <button
                                className={styles.btn}
                                onClick={() => dispatch(cartSlice.actions.decrease(data.id))}
                            >
                                -
                            </button>
                            <span className={styles.input_quantity}>{data.amount}</span>
                            <button
                                className={styles.btn}
                                onClick={() => dispatch(cartSlice.actions.increase(data.id))}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className={styles.sale}>
                        <p>Dịch vụ phòng chờ hạng thương gia tại sân bay</p>
                        <p>
                            Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
