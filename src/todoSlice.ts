import { createSlice } from "@reduxjs/toolkit";

interface todoItem {
  content: string;
  id: number;
}

const initialState = {
  tasksList: [{ id: 0, content: "" }],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addItem: (state, { payload }: { payload: string }) => {
      let tmp: todoItem[] = [...state.tasksList];
      let newItem: todoItem = {
        content: payload,
        id: Math.random(),
      };
      tmp.push(newItem);
      state.tasksList = tmp;
    },
    deleteItem: (state, { payload }: { payload: number }) => {
      let removeItem = state.tasksList.filter((todo) => {
        return todo.id !== payload;
      });
      state.tasksList = removeItem;
    },
  },
});

export const { addItem, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
