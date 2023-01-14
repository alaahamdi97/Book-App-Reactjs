import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInsert } from "./reportSlice";
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3003/books");
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (bookData, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    try {
      bookData.userName = getState().auth.userName;
      // dispatch(deleteBook({ id: 3 }));
      const res = await fetch("http://localhost:3003/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "content-type": "application/json",
          charset: "UTF-8",
        },
      });
      const data = await res.json();
      dispatch(logInsert({ name: "insertBook", status: "success" }));

      return data;
    } catch (error) {
      dispatch(logInsert({ name: "insertBook", status: "failed" }));
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3003/books/${item.id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          charset: "UTF-8",
        },
      });
      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const getBook = createAsyncThunk(
//   "book/deleteBook",
//   async (item, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       await fetch(`http://localhost:3005/books/${item.id}`, {
//         method: "GET",
//         headers: {
//           "content-type": "application/json",
//           charset: "UTF-8",
//         },
//       });
//       return item;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLoading: false, error: null, bookInfo: null },
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      // console.log(action);
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log(action);
    },
    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((el) => el.id !== action.payload.id);
    },
    [deleteBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [getBook.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.bookInfo = action.payload;
    // },
  },
});
export default bookSlice.reducer;
