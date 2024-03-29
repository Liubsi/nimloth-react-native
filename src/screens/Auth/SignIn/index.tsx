import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import { setIsSignedIn, signIn } from './signInSlice';
import { StyledInput, StyledButton } from '../SignUp/styles';
import { useAppDispatch } from '../../../store/hooks';

const SignInScreen = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = async () => {
    dispatch(signIn({ email, password }))
      .then(({ meta }) => {
        if (meta.requestStatus === 'fulfilled') {
          dispatch(setIsSignedIn(true));
        } else {
          console.warn('Something went wrong.');
        }
      })
      .catch((error) => {
        console.warn(error);
      });
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
