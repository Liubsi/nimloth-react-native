import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/types';
import { StyledButton, ButtonContainer } from './styles';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Landing'>;

const LandingScreen = ({ navigation }: ScreenProps) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 35 }}>Nimloth</Text>
      <ButtonContainer>
        <StyledButton
          type='solid'
          title='Sign in'
          onPress={() => navigation.navigate('Main')}
        />
        <StyledButton
          type='clear'
          title='Sign up'
          onPress={() => navigation.navigate('SignUp')}
        />
      </ButtonContainer>
    </SafeAreaView>
  );
};

export default LandingScreen;
