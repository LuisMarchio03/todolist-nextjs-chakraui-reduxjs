import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: [
    { id: 1, title: "todo1", completed: false, deleted: false },
    { id: 2, title: "todo2", completed: false, deleted: false },
    { id: 3, title: "todo3", completed: true, deleted: false },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        deleted: false,
      };
      state.push(newTask);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    toggleDelete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addTask, toggleComplete, toggleDelete } = taskSlice.actions;

export default taskSlice.reducer;
