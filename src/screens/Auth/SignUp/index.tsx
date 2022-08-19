import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledInput, StyledButton } from './styles';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop: 50, marginBottom: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your legal name?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput autoFocus placeholder='First name' />
        <StyledInput placeholder='Last name' />
        <StyledButton title='Continue' />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
