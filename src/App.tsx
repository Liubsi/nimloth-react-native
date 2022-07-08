import React, { useState, useEffect } from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@rneui/themed';


import Amplify from '@aws-amplify/core';
import { Auth, auth0SignInButton } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react';
import config from './aws-exports';
Amplify.configure(config);
import LoginScreen from './Screens/Landing/Login';
import SignInScreen from './Screens/Landing/SignIn';
import SignUpScreen from './Screens/Landing/SignUp';
import MainScreen from './Screens/Home/Main';
import SettingsScreen from './Screens/Home/Settings';
import { loadFonts } from './fonts';
import theme from './theme';
import AuthContext from './AuthContext';
// migrate wrapper to another file
// look into making touchable without feedback lower order, if possible
// add back status bar eventually (if needed)
const Stack = createNativeStackNavigator();


let isSignedIn = true; // change to false when signing in



const App = () => {
  // load the fonts before the app loads
 
  const loaded = loadFonts();
  Auth.currentAuthenticatedUser({
    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
}).then(user => console.log(user))
.catch(err => {
  isSignedIn =false;
  });
 
  return (
    <AuthContext>
     <ThemeProvider theme={theme}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isSignedIn ? (
            <>
            <Stack.Screen name='Main' component={MainScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} />
          </>
           
          ) : (
            <>
            <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
          </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
     </ThemeProvider>
     </AuthContext>
  );
};

export default registerRootComponent(App);
