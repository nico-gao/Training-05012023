import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";


interface BookItem {}

interface WishlistState {
    books: BookItem[];
}
const initialState: WishlistState = {
    books: [],
};



const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        
    },
    extraReducers: {},
});

export const {  } = wishlistSlice.actions;

export default wishlistSlice.reducer;