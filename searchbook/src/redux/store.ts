import { Middleware, configureStore,  } from "@reduxjs/toolkit";
import searchbookSlice from "./slices/searchbookSlice";
import wishlistSlice from "./slices/wishlistSlice";


// const saveWishlistMiddleware: Middleware = ({getState, dispatch}) => next => action => {
//     console.log("saveWishlistMiddleware", getState())
//     const wishlist = getState().wishlistSlice.books;
//     /* setItem, getItem */
//     if(action.type === updateBook(undefined).type){
//         const {payload} = action;
//     }
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     next(action)
// }


const store = configureStore({
    reducer: {
        searchbookSlice,
        wishlistSlice
    }
});





export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch