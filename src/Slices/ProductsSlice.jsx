import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getProduct } = ProductsSlice.actions;

export default ProductsSlice.reducer;
