import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./slices/counterSlice";

/* 
  redux toolkit(RTK)

    slice


*/


const store = configureStore({
  reducer:{
    counter: counterSlice
  },
  middleware: (getDefaultMiddleware) => {
    console.log("default middleware",getDefaultMiddleware())
    return getDefaultMiddleware()
  }

})


export default store