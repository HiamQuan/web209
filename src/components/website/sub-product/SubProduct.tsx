import React, { useEffect, useState } from "react";
import { listByCategory } from "../../../api/products";
import style from "./SubProduct.module.css";

const SubProduct = () => {
    const [products, setProducts] = useState<any>([]);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await listByCategory(2);
            setProducts(data);
        };
        getProduct();
    }, []);
    return (
        <div className="container-lg">
            <h3 className={style["section-title"]}>Phụ Kiện</h3>
            <div className={style["sub-product"]}>
                {" "}
                {products &&
                    products.map((item: any, index: any) => (
                        <div key={index} className={style["sub-items"]}>
                            <span className={style["sub-item-title"]}>{item.name}</span>
                            <img src={item.img} alt="" className="img-fluid" />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SubProduct;
