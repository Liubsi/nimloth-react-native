import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomText, LoginBackground } from '../../components';
import ChartsScreen from './MainPages/Charts';
import WalletScreen from './MainPages/Wallet';
import SendScreen from './MainPages/Send';
import FriendsScreen from './MainPages/Friends';
import TransactionHistoryScreen from './MainPages/TransactionHistory';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Friends'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name='Charts' component={ChartsScreen} />
      <Tab.Screen name='Wallet' component={WalletScreen} />
      <Tab.Screen name='Home' component={SendScreen} />
      <Tab.Screen name='Friends' component={FriendsScreen} />
      <Tab.Screen
        name='TransactionHistory'
        component={TransactionHistoryScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
