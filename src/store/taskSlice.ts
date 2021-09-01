import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    task: [{id: 1, title: 'Teste'}],
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
    },
    completedTask(state, { payload }) {
      
    }
  }
});

export const { createTask, changeTask, completedTask } = taskSlice.actions

export default taskSlice.reducer;
