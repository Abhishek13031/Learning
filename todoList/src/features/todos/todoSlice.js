import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: [{ id: 1, text: "Learn Redux Toolkit", completed: false }]
  },
  reducers: {
    // Adding a todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generates a unique ID
        text: action.payload,
        completed: false
      };
      state.tasks.push(todo);
    },
    // Deleting a todo
    removeTodo: (state, action) => {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
    },
    // Toggling completion
    toggleTodo: (state, action) => {
      const todo = state.tasks.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    // Editing a todo
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.tasks.find((t) => t.id === id);
      if (todo) todo.text = newText;
    },
  }
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;