/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';
import type { RootState } from 'src/store';
import type { SignUpUser } from '.';

// TODO: Add more options for signUp

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (
    {
      firstName,
      lastName,
      password,
      email,
      phoneNumber,
      birthdate,
      address,
    }: SignUpUser,
    { rejectWithValue }
  ) => {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          // email, // optional
          phone_number: phoneNumber, // optional - E.164 number convention
          birthdate,
          // name: email,
          // other custom attributes
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
      return user;
    } catch (error) {
      console.log('error signing up:', error);
      return rejectWithValue(error);
    }
  }
);

const initialState: SignUpUser = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  phoneNumber: '',
  birthdate: '',
  address: '',
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setUserPassword(state, action) {
      state.password = action.payload;
    },
    setUserEmail(state, action) {
      state.email = action.payload;
    },
    setUserPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setUserBirthdate(state, action) {
      state.birthdate = action.payload;
    },
    setUserFirstName(state, action) {
      state.firstName = action.payload;
    },
    setUserLastName(state, action) {
      state.lastName = action.payload;
    },
    setUserAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const getSignUpFields = (state: RootState) => state.signUp;

export const {
  setUserPassword,
  setUserEmail,
  setUserFirstName,
  setUserLastName,
  setUserPhoneNumber,
  setUserBirthdate,
  setUserAddress,
} = signUpSlice.actions;

export default signUpSlice.reducer;
