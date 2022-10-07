/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Auth } from 'aws-amplify';
import type { RootState } from 'src/store';

type SignUpUser = {
  firstName: string;
  lastName: string;
  password: string;
  email: string; // make optional?
  phoneNumber: string; // make optional?
  birthdate: string;
  address: string;
};

// TODO: Add more options for signUp
// TODO: Fix: "A non-serializable value was detected in an action, in the path: `payload`."
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
          phone_number: `+1${phoneNumber}`, // optional - E.164 number convention
          birthdate,
          name: `${firstName} ${lastName}`,
          // other custom attributes
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      return user;
    } catch (error) {
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
    resetState() {
      // eslint-disable-next-line no-unused-expressions
      initialState;
    },
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
  resetState,
  setUserPassword,
  setUserEmail,
  setUserFirstName,
  setUserLastName,
  setUserPhoneNumber,
  setUserBirthdate,
  setUserAddress,
} = signUpSlice.actions;

export default signUpSlice.reducer;
