import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    counterPlus: (state, action) => {
      state.basket = state.basket.map((item) => {
        if (item._id == action.payload) {
          if (item.count > 9) {
            alert("You can't go through. Count cannot be more than 1.");
          } else {
            item.count = item.count + 1;
            item.totalPrice = item.count * item.price;
          }
        }
        return item;
      });
    },
    counterMinus: (state, action) => {
      state.basket = state.basket.map((item) => {
        if (item._id == action.payload) {
          if (item.count < 2) {
            alert("You can't go through. Count cannot be less than 1.");
            item.count = 2;
          }
          item.count = item.count - 1;
          item.totalPrice = item.count * item.price;
        }
        return item;
      });
    },
  },
});

export const { addBasket, counterPlus, counterMinus } = BasketSlice.actions;

export default BasketSlice.reducer;
