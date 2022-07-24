import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChartsScreen from '../MainPages/Charts';
import WalletScreen from '../MainPages/Wallet';
import SendScreen from '../MainPages/Send';
import FriendsScreen from '../MainPages/Friends';
import TransactionHistoryScreen from '../MainPages/TransactionHistory';
import { StyledTabNavigator } from './styles';

// TODO: Figure out how to wrap Tab.Screen with StyledComponent

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <StyledTabNavigator initialRouteName='Send'>
      <Tab.Screen name='Charts' component={ChartsScreen} />
      <Tab.Screen name='Wallet' component={WalletScreen} />
      <Tab.Screen name='Send' component={SendScreen} />
      <Tab.Screen name='Friends' component={FriendsScreen} />
      <Tab.Screen
        name='TransactionHistory'
        component={TransactionHistoryScreen}
      />
    </StyledTabNavigator>
  );
};

export default TabNavigator;
