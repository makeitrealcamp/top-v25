import { createSlice, createAsyncThunk, createReducer, createAction } from '@reduxjs/toolkit';

import { fetchCount } from './counterAPI';

// const increment = createAction('counter/increment');
// const decrement = createAction('counter/decrement');
// const incrementByAmount = createAction('counter/incrementByAmount');

// const reducer = createReducer(0, (builder) => {
//   builder
//     .addCase(increment, (state) => state + 1)
//     .addCase(decrement, (state) => state - 1)
//     .addCase(incrementByAmount, (state, action) => state + action.payload);
// })

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount) => {
  const response = await fetchCount(amount);

  return response.data;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'error';
      });
  },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = state => state.counter.value

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState())

  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount))
  }
}

// export const fetchTasks = () => async(dispatch) => {
//   dispatch(isLoading(true))
//   try {
//     const tasks = await getTasks();
//     dispatch(setTasks(tasks))
//   } catch (error) {
//     dispatch(hasErrored(error.message))
//   } finally {
//     dispatch(isLoading(false))
//   }
// }



export default counterSlice.reducer
