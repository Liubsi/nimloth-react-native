/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { MainParamList } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import SearchScreen from '@screens/Home/Main/Search';
import WalletScreen from '@screens/Home/Main/Wallet';
import SendScreen from '@screens/Home/Main/Send';
import FriendsScreen from '@screens/Home/Main/Friends';
import TransactionHistoryScreen from '@screens/Home/Main/TransactionHistory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
// TODO: Change icons, they ugly
// TODO: Make spacing between header and first component consistent
// TODO: Disable back swiping for certain screens

const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<MainParamList>();

const MainNavigator = () => {
  return (
    <StyledTabNavigator initialRouteName={SCREEN_NAMES.SEND}>
      <Tab.Screen
        name={SCREEN_NAMES.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <ChartsIcon />;
          },
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.WALLET}
        component={WalletScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <WalletIcon />;
          },
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.SEND}
        component={SendScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <SendIcon />;
          },
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.FRIENDS}
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <FriendsIcon />;
          },
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.HISTORY}
        component={TransactionHistoryScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <HistoryIcon />;
          },
        }}
      />
    </StyledTabNavigator>
  );
};

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'Urbanist-SemiBold',
        },
      }}
    >
      <MainStack.Screen name='Main' component={MainNavigator} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
