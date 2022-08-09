import { Rate } from "antd";
import { Link } from "react-router-dom";
import { currency } from "../../../../utils/helpers";
import style from "./BrandItem.module.css";

type Props = {
    products: any[];
};
const BrandItem = ({ products }: Props) => {
    return (
        <div>
            <h3 className={style["section-title"]}>Sản Phẩm Cùng Loại</h3>
            <div className={style["product-row"]}>
                {products &&
                    products.map((item: any) => (
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

export default BrandItem;
