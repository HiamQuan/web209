import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./ProductDetailPage.module.css";
import { fetchProductByBrand, fetchProductById } from "../../../components/website/product-row/ProductSlice";
import { currency } from "../../../utils/helpers";
import { ShoppingCartOutlined } from "@ant-design/icons";
import BrandItem from "./brand-item/BrandItem";
import cartSlice from "../cart-page/CartSlice";
import { message } from "antd";

const ProductDetailPage = () => {
    const { id } = useParams();
    const product = useSelector((state: any) => state.product.current);
    const products = useSelector((state: any) => state.product.sameBrand);
    const dispatch = useDispatch<any>();
    const addToCart = (product: any) => {
        dispatch(cartSlice.actions.add(product));
        message.success("Thêm thành công vào giỏ hàng");
    };
    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [id]);
    useEffect(() => {
        dispatch(fetchProductByBrand(product.brand));
    }, [product.brand]);
    return (
        <div className="container">
            <div className="tw-border-b-2">
                <h2 className={style["product-name"]}>{product.name}</h2>
            </div>
            <div className="container-lg">
                <div className={style["images-row"]}>
                    <div className={style.images}>
                        <img src={product.img} alt="" className="img-fluid" />
                        <div className={style.gallery}>
                            <img src={product.img} alt="" className="img-fluid" />
                            <img src={product.img} alt="" className="img-fluid" />
                            <img src={product.img} alt="" className="img-fluid" />
                            <img src={product.img} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className={style["image-row-right"]}>
                        <div>
                            <div className={style["price-row"]}>
                                <span style={{ color: "red", fontSize: "1.9em" }}>
                                    {product.salePrice && currency(product.salePrice)}
                                    <u style={{ margin: "0 0.2em" }}>đ</u>
                                </span>
                                <span style={{ textDecoration: "line-through", color: "gray" }}>
                                    {product.salePrice && currency(product.price)}
                                    <u style={{ margin: "0 0.2em" }}>đ</u>
                                </span>
                            </div>
                            <p>{product.describe}</p>
                        </div>
                        <div className={style["button-row"]}>
                            <button className={style["button-buy"]}>Mua Ngay</button>
                            <button className={style["button-cart"]} onClick={() => addToCart(product)}>
                                <ShoppingCartOutlined />
                            </button>
                            <p>Thêm Vào Giỏ Hàng</p>
                        </div>
                    </div>
                </div>
                {/* Same-brand-items */}
                <div style={{ margin: "7em 0" }}>
                    <BrandItem products={products} />
                </div>
                <div className={style["detail-section"]}>
                    <h3 className={style["detail-title"]}>ĐẶC ĐIỂM NỔI BẬT</h3>
                    <p>{product.detail}</p>
                </div>
                <div className={style["detail-descibe"]}>{product.describe}</div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
