import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  //prop 1
  name: "cart",

  //prop 2
  initialState: {
    productData: [],
  },

  //prop 3
  reducers: {
    addToCart(state, action) {
      let userData = action.payload;

      state.productData.push(userData);
    },
    removeAllproduct(state, action) {
      state.productData = [];
    },
    removeItem(state, action) {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

//export action
export const { addToCart, removeAllproduct, removeItem } = cartSlice.actions;

//exporting reducer
export default cartSlice.reducer;
