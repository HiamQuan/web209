import { ProductType } from "../type/product";
import instance from "./instance";

export const list = () => {
    const url = `/products`;
    return instance.get(url);
};

export const create = (products: ProductType) => {
    const url = `/products`;
    return instance.post(url, products);
};

export const listByCategory = (category: number) => {
    const url = `/products/category=${category}`;
    return instance.get(url);
};

export const read = (id: number | undefined) => {
    const url = `/product/${id}`;
    return instance.get(url);
};

export const update = (products: ProductType) => {
    const url = `/product/${products.id}`;
    return instance.patch(url, products);
};

export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
