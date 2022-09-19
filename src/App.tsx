import React from 'react';
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
import theme from './theme';
import store from './store';

const Stack = createNativeStackNavigator<RootStackParamList>();
const isSignedIn = false;

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
