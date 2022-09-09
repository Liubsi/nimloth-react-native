import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthParamList } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import LandingScreen from './Landing';
import SignUpScreen from './SignUp';
import SignInScreen from './SignIn';
import MainScreen from '../Home/Main';

const AuthStack = createNativeStackNavigator<AuthParamList>();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN_NAMES.LANDING}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name={SCREEN_NAMES.LANDING} component={LandingScreen} />
      <AuthStack.Screen name={SCREEN_NAMES.SIGN_IN} component={SignInScreen} />
      <AuthStack.Screen name={SCREEN_NAMES.SIGN_UP} component={SignUpScreen} />
      <AuthStack.Screen name={SCREEN_NAMES.WALLET} component={MainScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthScreen;
