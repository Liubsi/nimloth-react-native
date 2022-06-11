import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './Login';
import Profile from './Profile';

// migrate wrapper to another file

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 0, backgroundColor: '#9C51B6' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#5946B2' }}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Profile' component={Profile} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </SafeAreaView>
    </>
  );
};

export default registerRootComponent(App);
