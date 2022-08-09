import React from "react";
import SubProduct from "../../components/website/sub-product/SubProduct";
import MenuBar from "../../components/website/MenuBar";
import Product from "../../components/website/product-row/Product";

const Home = () => {
    return (
        <div className="container">
            <div className="tw-pr-32 tw-pl-64 tw-my-8">
                <MenuBar />
            </div>
            <Product />
            <SubProduct />
        </div>
    );
};

export default Home;
