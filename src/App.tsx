import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@rneui/themed';
import type { RootStackParamList } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import AuthScreen from './screens/Auth';
import MainScreen from './screens/Home/Main';
import loadFonts from './fonts';
import theme from './theme';

const Stack = createNativeStackNavigator<RootStackParamList>();
const isSignedIn = false;

const App = () => {
  // TODO: replace null with a loading screen
  const loaded = loadFonts();
  if (!loaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isSignedIn ? (
            <Stack.Screen name={SCREEN_NAMES.AUTH} component={AuthScreen} />
          ) : (
            <Stack.Screen name={SCREEN_NAMES.MAIN} component={MainScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default registerRootComponent(App);
