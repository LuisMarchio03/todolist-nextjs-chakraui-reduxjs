import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    task: [{ id: 1, title: 'todo1', completed: true }],
  },
  reducers: { 
    createTask(state, { payload }) {
      return {
        ...state,
        task: [...state.task, payload],
      } 
    },
    changeTask(state, { payload }) {
      return { ...state, task: payload }
    },
    completedTask(state, { payload }) {
      const index = state.task.findIndex((task => task.id === payload.id));
    }
  }
});

export const { createTask, changeTask, completedTask } = taskSlice.actions

export default taskSlice.reducer;
