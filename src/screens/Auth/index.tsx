import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './Landing';
import SignUpScreen from './SignUp';
import MainScreen from '../Home/Main';

const AuthStack = createNativeStackNavigator();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator
      initialRouteName='Landing'
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name='Landing' component={LandingScreen} />
      <AuthStack.Screen name='Main' component={MainScreen} />
      <AuthStack.Screen name='SignUp' component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthScreen;
