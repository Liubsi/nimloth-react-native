import React from 'react';
import { Amplify } from 'aws-amplify';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@rneui/themed';
import type { RootStackParamList } from '@navigation/types';
import { withAuthenticator } from '@aws-amplify/ui-react';
import SCREEN_NAMES from '@navigation/names';
import AuthScreen from '@screens/Auth';
import MainStackScreen from '@screens/Home/Main';
import SettingsScreen from '@screens/Home/Settings';
import loadFonts from '@common/fonts';
import awsconfig from './aws-exports';
import theme from './theme';
import store from './store';

const Stack = createNativeStackNavigator<RootStackParamList>();
const isSignedIn = true;

Amplify.configure(awsconfig);

const App = () => {
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
