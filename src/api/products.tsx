import { ProductType } from "../type/product";
import instance from "./instance";

export const list = () => {
    const url = `/products?status=true`;
    return instance.get(url);
};

export const create = (products: ProductType) => {
    const url = `/products`;
    return instance.post(url, products);
};

export const listByCategory = (category: number) => {
    const url = `/products?categoryId=${category}&status=true`;
    return instance.get(url);
};
export const listByBrand = (brand: string) => {
    const url = `/products?brand=${brand}&status=true&_start=12&_limit=5`;
    return instance.get(url);
};
export const read = (id: number | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
};

export const update = (products: ProductType, id: number) => {
    const url = `/products/${id}`;
    return instance.patch(url, products);
};

export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
