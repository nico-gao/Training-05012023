import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

export interface IBookItem {
    id: string;
    volumeInfo: {
        description: string | undefined;
        authors: string[] | undefined;
        title: string | undefined;
        publishedDate: string | undefined;
        imageLinks: { smallThumbnail: string | undefined; thumbnail: string | undefined } | undefined;
    };
}

interface SearchbookState {
    books: IBookItem[];
    keyword: string;
    isLoading: boolean;
}

const initialState: SearchbookState = {
    books: [],
    keyword: "",
    isLoading: false,
};

export const search = createAsyncThunk<
    // Return type of the payload creator
    any,
    // First argument to the payload creator
    undefined,
    {
        // Optional fields for defining thunkApi field types
        dispatch: AppDispatch;
        state: RootState;
    }
>("searchbook/search", async (args, thunkAPI) => {
    const { keyword } = thunkAPI.getState().searchbookSlice;
    const result = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}&startIndex=0&maxResults=20`
    );
    const res = await result.json();
    console.log("res", res);
    return res.items;
});

const searchbookSlice = createSlice({
    name: "searchbook",
    initialState,
    reducers: {
        updateKeyword: (state, action) => {
            state.keyword = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(search.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(search.fulfilled, (state, action) => {
                state.isLoading = false;
                state.books = action.payload;
                state.keyword = "";
            })
            .addCase(search.rejected, (state, action) => {
                console.log("err", action.error.message);
                state.isLoading = false;
                //show alert
            });
    },
});

export const { updateKeyword } = searchbookSlice.actions;

export default searchbookSlice.reducer;
