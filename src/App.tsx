import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@rneui/themed';
import LoginScreen from './screens/Auth/Login';
import MainScreen from './screens/Home/Main';
import { loadFonts } from './fonts';
import theme from './theme';

// TODO: Don't think status bar is working

const Stack = createNativeStackNavigator();
const isSignedIn = false;

const App = () => {
  // TODO: replace null with a loading screen
  const loaded = loadFonts();
  if (!loaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isSignedIn ? (
            <Stack.Screen name='Login' component={LoginScreen} />
          ) : (
            <Stack.Screen name='Main' component={MainScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default registerRootComponent(App);
