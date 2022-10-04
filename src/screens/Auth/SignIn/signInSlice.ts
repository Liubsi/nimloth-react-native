/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';
import type { RootState } from 'src/store';
import type { SignInUser } from '.';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: SignInUser, { rejectWithValue }) => {
    try {
      const { user } = await Auth.signIn({
        username: email,
        password,
      });
      console.log(user);
      console.log(Auth.currentAuthenticatedUser);

      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: SignInUser = {
  password: '',
  email: '',
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
  },
});

export const getSignInFields = (state: RootState) => state.signIn;

export const { setUserPassword, setUserEmail } = signInSlice.actions;

export default signInSlice.reducer;
