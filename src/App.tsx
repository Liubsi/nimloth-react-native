import React from 'react';
import Amplify from 'aws-amplify';
import config from "./aws-exports";
import { withAuthenticator } from 'aws-amplify-react-native';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@rneui/themed';
import type { RootStackParamList } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import AuthScreen from '@screens/Auth';
import MainScreen from '@screens/Home/Main';
import loadFonts from '@common/fonts';
import theme from './theme';
import store from './store';

const Stack = createNativeStackNavigator<RootStackParamList>();
const isSignedIn = false;
Amplify.configure(config);

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
              <Stack.Screen name={SCREEN_NAMES.MAIN} component={MainScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default registerRootComponent(App);

