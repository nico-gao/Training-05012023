import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

export interface IBookItem {
  id: string;
  volumeInfo: {
    description: string | undefined;
    authors: string[] | undefined;
    title: string | undefined;
    publishedDate: string | undefined;
    imageLinks:
      | {
          smallThumbnail: string | undefined;
          thumbnail: string | undefined;
        }
      | undefined;
  };
}

interface SearchbookState {
  books: IBookItem[];
  keyword: string;
  isLoading: boolean;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

const initialState: SearchbookState = {
  books: [],
  keyword: "",
  isLoading: false,
  itemsPerPage: 20,
  totalPages: 1,
  currentPage: 1,
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
  const { keyword, currentPage, itemsPerPage } =
    thunkAPI.getState().searchbookSlice;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const maxResults = itemsPerPage;
  const result = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&startIndex=${startIndex}&maxResults=${maxResults}`
  );
  const res = await result.json();
  console.log("res", res);
  return res;
});

const searchbookSlice = createSlice({
  name: "searchbook",
  initialState,
  reducers: {
    updateKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    updatePage: (state, action) => {
      const newPage = action.payload;
      if (!(newPage > state.totalPages) && newPage >= 1) {
        state.currentPage = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload.items;
        state.totalPages = Math.ceil(
          action.payload.totalItems / state.itemsPerPage
        );
      })
      .addCase(search.rejected, (state, action) => {
        console.log("err", action.error.message);
        state.isLoading = false;
        //show alert
      });
  },
});

export const { updateKeyword, updatePage } = searchbookSlice.actions;

export default searchbookSlice.reducer;
