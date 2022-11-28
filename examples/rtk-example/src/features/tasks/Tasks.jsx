import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded(state, action) {
      state.list.push(action.payload)
    },
    deleteTask(state, action) {
      state.list = state.list.filter(task => task.id !== action.payload)
    },
    taskCompleted(state, action) {
      const { id } = action.payload
      const existingTask = state.list.find(task => task.id === id)
      if (existingTask) {
        existingTask.completed = true
      }
    }
  }
})


export const { taskAdded, deleteTask, taskCompleted } = tasksSlice.actions

export default tasksSlice.reducer
