import {
    createSlice,
    PayloadAction,
    createAsyncThunk,
    AnyAction,
} from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { IBookItem } from "./searchbookSlice";

interface WishlistState {
    books: IBookItem[];
}
const initialState: WishlistState = {
    books: [],
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        updateWishlist: (state, action) => {
            state.books = action.payload;
        },
    },
});

export const initWishlist = (() =>
    (dispatch: AppDispatch, getState: () => RootState) => {
        const newWishlist = JSON.parse(
            localStorage.getItem("wishlist") ?? "[]"
        );
        dispatch(updateWishlist(newWishlist));
    }) as unknown as () => AnyAction;

export const saveWishlistToLS = ((payload: IBookItem) =>
    (dispatch: AppDispatch, getState: () => RootState) => {
        const bookItem = payload;
        const { id } = bookItem;
        const state = getState().wishlistSlice;
        let newWishlist;
        if (!state.books.some((item) => item.id === id)) {
            newWishlist = [bookItem, ...state.books];
        } else {
            newWishlist = state.books.filter((item) => item.id !== id);
        }
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
        dispatch(updateWishlist(newWishlist));
    }) as unknown as (bookItem: IBookItem) => AnyAction;

export const { updateWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
