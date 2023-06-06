import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import getInitCounterAPI from "../../../API/getInitCounterAPI";

/* 
  createAsyncThunk:
    promise: pending, fulfilled, rejeted


*/

export const getInitCounter = createAsyncThunk("counter/getInitCounter", async(args, thunkAPI) => {
  const initCounter = await getInitCounterAPI();
  return initCounter;
})

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,
        isLoading: false
    },
    reducers: {
        increment: (state) => {
            state.counter++; //mutable
        },
        update: (state, action) => {
            state.counter = action.payload;
        },
    },
    extraReducers:(builder) => {//internal actions(reducers), will not be exposed to the component
      builder.addCase(getInitCounter.pending, (state, action) => {
        state.isLoading = true
      }).addCase(getInitCounter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.counter = action.payload

      }).addCase(getInitCounter.rejected, (state, action) => {
        console.log("err", action.error.message)
        state.isLoading = false;
        //show alert
      })
    }
});

export const { increment, update } = counterSlice.actions;

/* export const getInitCounter = () => async (dispatch, getState) => {
    const initCounter = await getInitCounterAPI();
    console.log("thunk", initCounter);
    dispatch(update(initCounter));
}; */

export default counterSlice.reducer;
