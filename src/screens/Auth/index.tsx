import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthParamList } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import MainStackScreen from '@screens/Home/Main';
import LandingScreen from './Landing';
import SignUpScreen from './SignUp';
import SignInScreen from './SignIn';

const AuthStack = createNativeStackNavigator<AuthParamList>();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN_NAMES.LANDING}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name={SCREEN_NAMES.LANDING} component={LandingScreen} />
      <AuthStack.Screen
        name={SCREEN_NAMES.SIGN_IN}
        component={MainStackScreen}
      />
      <AuthStack.Screen name={SCREEN_NAMES.SIGN_UP} component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthScreen;
