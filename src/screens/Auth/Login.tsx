import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParams';
import { StyledButton, ButtonContainer } from './styles';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenProp>();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 35 }}>Nimloth</Text>
      <ButtonContainer>
        <StyledButton type='solid' title='Sign in' />
        <StyledButton type='clear' title='Sign up' />
      </ButtonContainer>
    </SafeAreaView>
  );
};

export default LoginScreen;
