/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import MainTabNavigator from '@navigation/MainNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {
  MainStackParamList,
  RootStackScreenProps,
} from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { SettingsIcon } from '@navigation/MainNavigator/styles';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainStackScreen = ({
  navigation,
}: RootStackScreenProps<SCREEN_NAMES.MAIN_STACK>) => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            // eslint-disable-next-line react/prop-types
            onPress={() => navigation.navigate(SCREEN_NAMES.SETTINGS)}
          >
            <SettingsIcon />
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'Urbanist-SemiBold',
        },
        headerStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <MainStack.Screen name={SCREEN_NAMES.MAIN} component={MainTabNavigator} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
