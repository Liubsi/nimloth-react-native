import React, { useState, useEffect } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@rneui/themed';
import type { RootStackParamList } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import AuthScreen from '@screens/Auth';
import MainStackScreen from '@screens/Home/Main';
import SettingsScreen from '@screens/Home/Settings';
import loadFonts from '@common/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import awsconfig from './aws-exports';
import theme from './theme';
import store from './store';

const Stack = createNativeStackNavigator<RootStackParamList>();

Amplify.configure(awsconfig);

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const value = await Auth.currentAuthenticatedUser();
        console.log(value);
        if (value) {
          setIsSignedIn(true);
        } else {
          console.log('this user is not logged in');
          setIsSignedIn(false);
        }
      } catch (error) {
        setIsSignedIn(false);
        console.log(`Something went wrong" ${error}`);
      }
    };

    bootstrapAsync();
  }, []);

  // TODO: replace null with a loading screen
  const loaded = loadFonts();
  if (!loaded) return null;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isSignedIn ? (
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
      </ThemeProvider>
    </Provider>
  );
};

export default registerRootComponent(App);
