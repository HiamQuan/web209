import { combineReducers } from "@reduxjs/toolkit";
import formSlice from "../components/website/form/FormSlice";
import ProductSlice from "../components/website/product-row/ProductSlice";
import cartSlice from "../pages/Website/cart-page/CartSlice";

const rootReducer = combineReducers({
    product: ProductSlice,
    cart: cartSlice.reducer,
    auth: formSlice.reducer,
});

export default rootReducer;
