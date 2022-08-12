import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@rneui/themed';
import LoginScreen from './Screens/Landing/Login';
import SignInScreen from './Screens/Landing/SignIn';
import SignUpScreen from './Screens/Landing/SignUp';
import MainScreen from './Screens/Home/Main';
import { loadFonts } from './fonts';
import theme from './theme';
// migrate wrapper to another file
// look into making touchable without feedback lower order, if possible
// add back status bar eventually (if needed)
const Stack = createNativeStackNavigator();
const isSignedIn = true; // change to false when signing in

const App = () => {
  // load the fonts before the app loads
  const loaded = loadFonts();
  if (!loaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isSignedIn ? (
            <>
              <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='SignIn' component={SignInScreen} />
              <Stack.Screen name='SignUp' component={SignUpScreen} />
            </>
          ) : (
            <Stack.Screen name='Main' component={MainScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default registerRootComponent(App);
