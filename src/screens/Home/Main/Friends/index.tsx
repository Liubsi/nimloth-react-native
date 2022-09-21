import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Tabs from '@components/Tabs';
import MainHeader from '@components/MainHeader';
import ExploreFriendsTabView from '@features/Home/Main/Friends/ExploreFriends';
import MyFriendsTabView from '@features/Home/Main/Friends/MyFriends';
import SCREEN_NAMES from '@navigation/names';
import { MainScreenProps } from '@navigation/types';
import { FriendProps } from './props';
import { selectFriends } from './friendsSlice';

// TODO: Consider turning ExploreFriendsTabView and MyFriendsTabView into a single component

const FriendsScreen = ({
  navigation,
  route,
}: MainScreenProps<SCREEN_NAMES.FRIENDS>) => {
  const { friendsData } = useSelector(selectFriends);
  const [friendsList, setFriendsList] = useState<FriendProps[]>(friendsData);

  // TODO: Have separate search functions for each tab
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
    <>
      <MainHeader
        headerName={route.name}
        onIconPress={() => navigation.navigate(SCREEN_NAMES.SETTINGS)}
      />
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
    </>
  );
};

export default FriendsScreen;
