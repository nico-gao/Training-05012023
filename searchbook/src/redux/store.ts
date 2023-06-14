import { configureStore } from "@reduxjs/toolkit";
import searchbookSlice from "./slices/searchbookSlice";
import wishlistSlice from "./slices/wishlistSlice";

const store = configureStore({
    reducer: {
        searchbookSlice,
        wishlistSlice
    },
});


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch