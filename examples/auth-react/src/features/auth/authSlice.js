import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { login } from '../../services/auth';

const initialState = {
  isAuth: false,
  token: null,
  profile: null,
  error: null,
  isLoading: false,
};

export const loginActionAsync = createAsyncThunk('auth/login', async ({email, password}) => {
  const response = await login(email, password);

  return response;
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.token = null;
      state.profile = null;
    },
    setAuthUser: (state, action) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.profile = action.payload.profile;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginActionAsync.fulfilled, (state, action) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.profile = action.payload.profile;
    })
    builder.addCase(loginActionAsync.rejected, (state, action) => {
      state.isAuth = false;
      state.token = null;
      state.error = action.error.message;
    })
    builder.addCase(loginActionAsync.pending, (state, action) => {
      state.isAuth = false;
      state.token = null;
      state.error = null;
      state.isLoading = true;
    })
  },
});

export const selectAuth = ({ auth }) => ({ isAuth: auth.isAuth, profile: auth.profile });

export const { logout, setAuthUser } = authSlice.actions;

export default authSlice.reducer;
