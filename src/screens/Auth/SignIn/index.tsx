import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import SCREEN_NAMES from '@navigation/names';
import type { AuthScreenProps } from '@navigation/types';
import { withAuthenticator } from 'aws-amplify-react-native';
import { StyledInput, StyledButton } from '../SignUp/styles';

const SignInScreen = ({
  navigation,
}: AuthScreenProps<SCREEN_NAMES.SIGN_IN>) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Welcome to Nimloth</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput autoFocus placeholder='Email' />
        <StyledInput autoFocus placeholder='Password' />
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledButton
          title='Login'
          onPress={() => navigation.navigate(SCREEN_NAMES.MAIN)}
        />
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ color: '#404AFF' }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default withAuthenticator(SignInScreen);
