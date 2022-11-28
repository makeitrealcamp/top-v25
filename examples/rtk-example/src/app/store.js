import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
