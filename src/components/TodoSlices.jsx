import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    }
  }
});

export const { addTodo, removeTodo, editTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
