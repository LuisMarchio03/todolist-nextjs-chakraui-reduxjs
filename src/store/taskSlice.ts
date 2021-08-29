import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    task: [],
    task_id: [],
    isCompleted: false,
  },
  reducers: { 
    createTask(state, { payload }) {
      const { id, content } = payload;

      return {
        ...state,
        task: [...state.task, id],
        task_id: {
          ...state.task_id,
          [id]: {
            content,
            completed: false
          }
        }
      } 
    },
    changeTask(state, { payload }) {
      return { ...state, user: payload }
    }
  }
});

export const { createTask, changeTask } = taskSlice.actions

export default taskSlice.reducer;
