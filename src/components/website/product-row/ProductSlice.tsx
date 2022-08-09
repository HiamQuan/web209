import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listByBrand, listByCategory, read } from "../../../api/products";

export const fetchProductByCategory = createAsyncThunk(
    "product/fetchProductByCategory ",

    async (id: number) => {
        try {
            const { data } = await listByCategory(id);
            return data;
        } catch (error: any) {
            return error.response.data;
        }
    }
);
export const fetchProductByBrand = createAsyncThunk(
    "product/fetchProductByBrand ",

    async (brand: string) => {
        try {
            const { data } = await listByBrand(brand);
            return data;
        } catch (error: any) {
            return error.response.data;
        }
    }
);

export const fetchProductById = createAsyncThunk(
    "product/fetchProductById ",

    async (id: any) => {
        try {
            const { data } = await read(id);
            return data;
        } catch (error: any) {
            return error.response.data;
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        sameBrand: [],
        product: [],
        current: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductByCategory.fulfilled, (state, action) => {
            state.product = action.payload;
            return state;
        });
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.current = action.payload;
            return state;
        });
        builder.addCase(fetchProductByBrand.fulfilled, (state, action) => {
            state.sameBrand = action.payload;
            return state;
        });
    },
});

export default productSlice.reducer;
