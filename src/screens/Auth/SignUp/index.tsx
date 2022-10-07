import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { SignUpParamList } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';

import AddressScreen from './AddressScreen';
import ConfirmScreen from './ConfirmScreen';
import DOBScreen from './DOBScreen';
import EmailScreen from './EmailScreen';
import NameScreen from './NameScreen';
import PasswordScreen from './PasswordScreen';
import PhoneScreen from './PhoneScreen';

// Joe's working on this
// Current flow:
// Email -> Password -> Legal Name -> Phone Number -> Date of birth -> Address
// Add?: Citizenship, PIN, Verify PIN, Verify Phone Number/Email

// EXAMPLE
const todo = {
  firstName: 'test',
  lastName: 'test',
  password: 'testpassword',
  email: 'testuser2@gmail.com', // optional
  phoneNumber: '+11111111111', // optional - E.164 number convention
  birthdate: '01/01/2000',
  address: 'test',
  // other custom attributes
};

// TODO: Add a welcome screen

const SignUpScreen = () => {
  const SignUpStack = createNativeStackNavigator<SignUpParamList>();

  return (
    <SignUpStack.Navigator
      initialRouteName={SCREEN_NAMES.EMAIL}
      screenOptions={{ headerShown: false }}
    >
      <SignUpStack.Screen name={SCREEN_NAMES.EMAIL} component={EmailScreen} />
      <SignUpStack.Screen
        name={SCREEN_NAMES.PASSWORD}
        component={PasswordScreen}
      />
      <SignUpStack.Screen name={SCREEN_NAMES.NAME} component={NameScreen} />
      <SignUpStack.Screen name={SCREEN_NAMES.PHONE} component={PhoneScreen} />
      <SignUpStack.Screen name={SCREEN_NAMES.DOB} component={DOBScreen} />
      <SignUpStack.Screen
        name={SCREEN_NAMES.ADDRESS}
        component={AddressScreen}
      />
      <SignUpStack.Screen
        name={SCREEN_NAMES.CONFIRM}
        component={ConfirmScreen}
      />
    </SignUpStack.Navigator>
  );
};

export default SignUpScreen;
