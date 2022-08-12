/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChartsScreen from '../MainPages/Charts';
import WalletScreen from '../MainPages/Wallet';
import SendScreen from '../MainPages/Send';
import FriendsScreen from '../MainPages/Friends';
import TransactionHistoryScreen from '../MainPages/TransactionHistory';
import {
  StyledTabNavigator,
  SendIcon,
  FriendsIcon,
  WalletIcon,
  ChartsIcon,
  HistoryIcon,
} from './styles';

// TODO: Figure out how to wrap Tab.Screen with StyledComponent
// TODO: Change icon coloring when selected

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <StyledTabNavigator initialRouteName='Send'>
      <Tab.Screen
        name='Charts'
        component={ChartsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          tabBarIcon: ({ focused, color, size }) => {
            return <ChartsIcon />;
          },
        }}
      />
      <Tab.Screen
        name='Wallet'
        component={WalletScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <WalletIcon />;
          },
        }}
      />
      <Tab.Screen
        name='Send'
        component={SendScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <SendIcon />;
          },
        }}
      />
      <Tab.Screen
        name='Friends'
        component={FriendsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <FriendsIcon />;
          },
        }}
      />
      <Tab.Screen
        name='History'
        component={TransactionHistoryScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          tabBarIcon: ({ focused, color, size }) => {
            return <HistoryIcon />;
          },
        }}
      />
    </StyledTabNavigator>
  );
};

export default TabNavigator;
