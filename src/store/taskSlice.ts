import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    task: [],
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
      state.task[payload.index].completed = true;
    }
  }
});

export const { createTask, changeTask, completedTask } = taskSlice.actions

export default taskSlice.reducer;
