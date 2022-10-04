import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import { useAppDispatch } from '../../../store/hooks';
import { StyledInput, StyledButton } from '../SignUp/styles';
import { signIn } from './signInSlice';

export type SignInUser = {
  email: string;
  password: string;
};

const SignInScreen = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = async () => {
    const user = await dispatch(signIn({ email, password }));
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Welcome to Nimloth</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput
          autoFocus
          placeholder='Email'
          onChangeText={(val) => setEmail(val)}
        />
        <StyledInput
          placeholder='Password'
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledButton title='Sign in' onPress={() => onSignIn()} />
        <TouchableOpacity style={{ marginTop: 20 }}>
          <Text style={{ color: '#404AFF' }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
