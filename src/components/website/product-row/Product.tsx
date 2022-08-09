import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByCategory } from "./ProductSlice";
import style from "./Product.module.css";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { currency } from "../../../utils/helpers";

const Product = () => {
    const product = useSelector((state: any) => state.product.product);
    const dispatch = useDispatch<any>();
    useEffect(() => {
        dispatch(fetchProductByCategory(1))
            .unwrap()
            .then((value: any) => console.log(value))
            .catch((error: any) => console.log(error));
    }, []);
    return (
        <div className={style["section-mobile"]}>
            <h2 className={style["section-title"]}>ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
            <div className={style["product-row"]}>
                {product &&
                    product.map((item: any) => (
                        <div className={style["product-item"]}>
                            <Link to={`/product/${item.id}`}>
                                <div>
                                    <img src={item.img} alt="" className="img-fluid" />
                                </div>
                                <h3 className={style.title}>{item.name}</h3>
                                <div className={style["price-row"]}>
                                    <span style={{ color: "red", fontSize: "1.3em" }}>
                                        {currency(item.salePrice)}
                                        <u style={{ margin: "0 0.2em" }}>đ</u>
                                    </span>
                                    <span style={{ textDecoration: "line-through", color: "gray" }}>
                                        {currency(item.price)}
                                        <u style={{ margin: "0 0.2em" }}>đ</u>
                                    </span>
                                </div>
                                <div className={style.textService}>
                                    <p>{item.textService}</p>
                                </div>
                                <div>
                                    <Rate disabled defaultValue={5} style={{ fontSize: "1em", marginRight: "2px" }} />
                                    <span style={{ fontWeight: "500", color: "gray" }}>{item.rate} đánh giá</span>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Product;
