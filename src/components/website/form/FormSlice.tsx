import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signup, signin } from "../../../api/auth";

export const signIn = createAsyncThunk("/signin", async (user: any) => {
    try {
        const { data } = await signin(user);
        return data;
    } catch (error: any) {
        return error.response.data;
    }
});

export const signUp = createAsyncThunk("/signup", async (user: any) => {
    try {
        const { data } = await signup(user);
        return data;
    } catch (error: any) {
        return error.response.data;
    }
});

const formSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: "",
        user: {
            id: null,
            email: "",
        },
    },
    reducers: {
        signout: (state: any, action: any) => {
            console.log("signout-------------------------------------------");
            state.accessToken = "";
            state.user.id = null;
            state.user.email = "";
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        });
    },
});

export default formSlice;
