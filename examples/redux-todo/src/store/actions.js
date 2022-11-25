import { ADD_TASK, SET_TASKS } from './types'

import { getTasks, createTask, deleteTask } from '../services/task'

// Action Creator
export const newTask = (task) => ({ type: ADD_TASK, payload: task })
export const setTasks = (tasks) => ({ type: SET_TASKS, payload: tasks })

// Async Action Creator
export const fetchTasks = () => {
  return async(dispatch) => {
    try {
      const tasks = await getTasks();
      dispatch(setTasks(tasks))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addTask = (task) => {
  return async(dispatch) => {
    try {
      const myTask = await createTask(task);
      dispatch(newTask(myTask))
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeteTask = (id) => {
  return async(dispatch, getState) => {
    const state = getState();
    try {
      await deleteTask(id);
      const newTasks = state.tasks.filter((task) => task.id !== id)

      dispatch(setTasks(newTasks))
    } catch (error) {
      console.log(error)
    }
  }
}
