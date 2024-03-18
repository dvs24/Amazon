import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const proxy = "http://localhost:8000";
const initialState = {
  productsData: [],
  itemList: [],
  userInfo: {},
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch(`${proxy}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseBody = await response.json();
  return responseBody;
});

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    addItemToList: (state, action) => {
      state.itemList = [...state.itemList, action.payload];
    },
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productsData = action.payload;
    });
  },
});

export const { addItemToList, addUserInfo } = homePageSlice.actions;

export default homePageSlice.reducer;
