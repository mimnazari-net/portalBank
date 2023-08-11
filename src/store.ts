import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";
import cardSlice from './bank/cardSlice'

const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
    todoSlice: todoSlice,
    cardSlice: cardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
