/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const friendsData = [
  { firstName: 'Bob', lastName: 'Jones', id: '1' },
  { firstName: 'Jerry', lastName: 'Jones', id: '2' },
  { firstName: 'Randall', lastName: 'Smith', id: '3' },
  { firstName: 'John', lastName: 'Doe', id: '4' },
  { firstName: 'Jane', lastName: 'Doe', id: '5' },
  { firstName: 'Joe', lastName: 'Doe', id: '6' },
  { firstName: 'Jill', lastName: 'Doe', id: '7' },
  { firstName: 'Jack', lastName: 'Doe', id: '8' },
  { firstName: 'Jill', lastName: 'Doe', id: '9' },
  { firstName: 'Jack', lastName: 'Button', id: '10' },
  { firstName: 'Jill', lastName: 'Button', id: '11' },
];

type FriendsState = {
  friends: [
    {
      firstName: string;
      lastName: string;
      id: string;
    }
  ];
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: friendsData,
  },
  reducers: {},
});

export const selectFriends = (state: FriendsState) => state.friends;

export default friendsSlice.reducer;
