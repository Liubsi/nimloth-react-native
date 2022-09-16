import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import { StyledInput, StyledButton } from '../SignUp/styles';

const SignInScreen = () => {
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
        <StyledButton title='Login' onPress={() => console.log('Login')} />
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ color: '#404AFF' }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
