import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import LoginScreen from './Screens/Landing/Login';
import SignInScreen from './Screens/Landing/SignIn';
import SignUpScreen from './Screens/Landing/SignUp';
import theme from './theme';
// migrate wrapper to another file

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 0, backgroundColor: '#9C51B6' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#5946B2' }}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='SignIn' component={SignInScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </ThemeProvider>
        </SafeAreaProvider>
      </SafeAreaView>
    </>
  );
};

export default registerRootComponent(App);
