import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { MainScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { signIn } from './signInSlice';
import { StyledInput, StyledButton } from '../SignUp/styles';
import { useAppDispatch } from '../../../store/hooks';
import isSignedIn from '../../../App';

export type SignInUser = {
  email: string;
  password: string;
};

const SignInScreen = ({ navigation }: MainScreenProps<SCREEN_NAMES.WALLET>) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = async () => {
    const user = await dispatch(signIn({ email, password }));
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log({ user });
      navigation.navigate(SCREEN_NAMES.MAIN_STACK, {
        screen: SCREEN_NAMES.MAIN_STACK,
      });
    } catch (error) {
      console.error(error);
    }
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
