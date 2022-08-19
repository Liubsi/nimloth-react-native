import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendsListScreen from './FriendsListScreen';
import ProfileScreen from '../../Profiles';

// TODO: Split this file
// The screen that displays Friends as well as Friend's profiles

const FriendsStack = createNativeStackNavigator();

const FriendsScreen = () => {
  return (
    <FriendsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <FriendsStack.Screen name='FriendsList' component={FriendsListScreen} />
      <FriendsStack.Screen name='Profile' component={ProfileScreen} />
    </FriendsStack.Navigator>
  );
};

export default FriendsScreen;
