/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {
  MainStackParamList,
  RootStackScreenProps,
} from '@navigation/types';
import MainTabNavigator from '@navigation/MainNavigator';
import SCREEN_NAMES from '@navigation/names';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainStackScreen = ({
  navigation,
}: RootStackScreenProps<SCREEN_NAMES.MAIN_STACK>) => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name={SCREEN_NAMES.MAIN} component={MainTabNavigator} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
