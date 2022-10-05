/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';
import type { RootState } from 'src/store';

type SignInUser = {
  email: string;
  password: string;
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: SignInUser, { rejectWithValue }) => {
    try {
      const { user } = await Auth.signIn({
        username: email,
        password,
      });
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  password: '',
  email: '',
  isSignedIn: false,
};

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setUserPassword(state, action) {
      state.password = action.payload;
    },
    setUserEmail(state, action) {
      state.email = action.payload;
    },
    setIsSignedIn(state, action) {
      state.isSignedIn = action.payload;
    },
  },
});

export const getSignInFields = (state: RootState) => state.signIn;
export const isSignedIn = (state: RootState) => state.signIn.isSignedIn;

export const { setUserPassword, setUserEmail, setIsSignedIn } =
  signInSlice.actions;

export default signInSlice.reducer;
