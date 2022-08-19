import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthParamList } from '@navigation/types';
import LandingScreen from './Landing';
import SignUpScreen from './SignUp';
import MainScreen from '../Home/Main';

const AuthStack = createNativeStackNavigator<AuthParamList>();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator
      initialRouteName='Landing'
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name='Landing' component={LandingScreen} />
      <AuthStack.Screen name='SignIn' component={MainScreen} />
      <AuthStack.Screen name='SignUp' component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthScreen;
