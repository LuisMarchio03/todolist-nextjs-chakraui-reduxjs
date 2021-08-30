import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    task: ['Teste'],
    isCompleted: false,
    toEdit: false,
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
    }
  }
});

export const { createTask, changeTask } = taskSlice.actions

export default taskSlice.reducer;
