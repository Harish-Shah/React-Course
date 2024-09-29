import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(state); // this will show a proxy object we cannot read the redux state data using normal console for this we have to use current
      console.log(current(state));
      state.items.length = 0; // we cannot write state = [] as this will a new copy of the state and wont mutate the original state. we can return { items : [] } this will do the samething
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
