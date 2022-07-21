import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layouts/WebsiteLayout/WebsiteLayout";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import Home from "./pages/Website/Home";
import "antd/dist/antd.css";
import "./App.css";
import Index from "./pages/Admin/index/Index";
import axios from "axios";
import { toast } from "react-toastify";
import { list, remove, update } from "./api/products";
import { ProductType } from "./type/product";
import AddProducts from "./pages/Admin/add/Add";

function App() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [categories, setCategories] = useState<Object[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list();
            setProducts(data);
        };
        getProducts();

        const getCategories = async () => {
            const { data } = await axios.get("http://localhost:3001/categories");
            setCategories(data);
        };
        getCategories();
    }, []);

    // Add Product
    // const onHandleAdd = async (product: any) => {
    //     const { data } = await create(product);
    //     setProducts([...products, data]);
    // };
    const onHandleRemove = async (id: number) => {
        remove(id);
        // rerender
        setProducts(products.filter((item) => item.id !== id));
        toast.success("Xóa thành công");
    };
    const onHandleUpdate = async (product: ProductType) => {
        try {
            // api
            const { data } = await update(product);
            // reREnder
            setProducts(products.map((item) => (item.id === data._id ? product : item)));
        } catch (error) {}
    };

    return (
        <Routes>
            <Route path="/" element={<WebsiteLayout />}>
                <Route index element={<Home />} />
            </Route>

            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Index products={products} />} />
                <Route path="add" element={<AddProducts categories={categories} />} />
            </Route>
        </Routes>
    );
}

export default App;
