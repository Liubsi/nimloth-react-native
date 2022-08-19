import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendsListScreen from './FriendsListScreen';
import ProfileScreen from '../../Profiles';

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
