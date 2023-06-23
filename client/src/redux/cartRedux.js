import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // state.products = [];
      // state.quantity = 0;
      // state.total = 0;

      let isAdded = false;
      state.products.map((product) => {
        if (
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
        ) {
          product.quantity += action.payload.quantity;
          state.total += action.payload.price * action.payload.quantity;
          isAdded = true;
        }
      });
      if (!isAdded) {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
      isAdded = false;
    },
    removeProduct: (state, action) => {
      state.products.map((product, index) => {
        if (
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
        ) {
          if (product.quantity === 1) {
            state.products.splice(index, 1);
            state.quantity -= 1;
            state.total -= action.payload.price * 1;
          } else {
            product.quantity -= 1;
            state.total -= action.payload.price * 1;
          }
        }
      });
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
