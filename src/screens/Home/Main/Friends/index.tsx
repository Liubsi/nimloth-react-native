import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import t from 'tcomb-form-native';
import Tabs from '@components/Tabs';
import ExploreFriendsTabView from '@features/Home/Main/Friends/ExploreFriends';
import MyFriendsTabView from '@features/Home/Main/Friends/MyFriends';
import { DataStore } from '@aws-amplify/datastore';
import { UserSignupData } from '../../../../models';
import { FriendProps } from './props';

// TODO: Consider turning ExploreFriendsTabView and MyFriendsTabView into a single component

const FriendsScreen = async () => {
  const models = await DataStore.query(UserSignupData);
  console.log(models);
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
  const [friendsList, setFriendsList] = useState<FriendProps[]>(friendsData);

  const handleSearch = (value: string) => {
    if (!value.length) {
      setFriendsList(friendsData);
      return;
    }
    const filteredList = friendsData.filter(
      ({ firstName, lastName }) =>
        firstName.toLowerCase().includes(value.toLowerCase()) ||
        lastName.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredList.length) {
      setFriendsList(filteredList);
    } else {
      setFriendsList(friendsList);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Tabs tabTitles={['My Friends', 'Explore']}>
        <MyFriendsTabView
          handleSearch={handleSearch}
          friendsList={friendsList}
        />
        <ExploreFriendsTabView
          handleSearch={handleSearch}
          friendsList={friendsList}
        />
      </Tabs>
    </View>
  );
};

export default FriendsScreen;
