import React, { useState, useEffect } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import AuthScreen from '@screens/Auth';
import MainStackScreen from '@screens/Home/Main';
import SettingsScreen from '@screens/Home/Settings';
import loadFonts from '@common/fonts';
import { setIsSignedIn, isSignedIn } from '@screens/Auth/SignIn/signInSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';
import awsconfig from './aws-exports';

const Stack = createNativeStackNavigator<RootStackParamList>();

Amplify.configure(awsconfig);

const AppRoute = () => {
  const signedIn = useAppSelector(isSignedIn);
  const dispatch = useAppDispatch();

  console.log('isSignedIn', signedIn);
  useEffect(() => {
    console.log('RUNNING');
    const bootstrapAsync = async () => {
      try {
        const value = await Auth.currentAuthenticatedUser();
        console.log(value);
        if (value) {
          dispatch(setIsSignedIn(true));
        } else {
          console.log('this user is not logged in');
          dispatch(setIsSignedIn(false));
        }
      } catch (error) {
        dispatch(setIsSignedIn(false));
        console.log(`Something went wrong" ${error}`);
      }
    };

    bootstrapAsync();
  }, []);

  // TODO: replace null with a loading screen
  const loaded = loadFonts();
  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!signedIn ? (
          <Stack.Screen name={SCREEN_NAMES.AUTH} component={AuthScreen} />
        ) : (
          <Stack.Group>
            <Stack.Screen
              name={SCREEN_NAMES.MAIN_STACK}
              component={MainStackScreen}
            />
            <Stack.Screen
              name={SCREEN_NAMES.SETTINGS}
              component={SettingsScreen}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
