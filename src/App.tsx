import React from 'react';
import { Amplify } from 'aws-amplify';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@rneui/themed';
import AppRoute from './AppRoute';
import awsconfig from './aws-exports';
import theme from './theme';
import store from './store';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoute />
      </ThemeProvider>
    </Provider>
  );
};

export default registerRootComponent(App);
