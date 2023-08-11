import { createSlice } from "@reduxjs/toolkit";

interface initial_state {
  value: number;
}
const initialState: initial_state = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
  },
});

export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;
