import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import type { AuthScreenProps } from '@navigation/types';
import { StyledButton, ButtonContainer } from './styles';

const LandingScreen = ({ navigation }: AuthScreenProps<'Landing'>) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 35 }}>Nimloth</Text>
      <ButtonContainer>
        <StyledButton
          type='solid'
          title='Sign in'
          onPress={() => navigation.navigate('SignIn')}
        />
        <StyledButton
          type='clear'
          title='Sign up'
          onPress={() =>
            navigation.navigate('SignUp', {
              screen: 'Email',
            })
          }
        />
      </ButtonContainer>
    </SafeAreaView>
  );
};

export default LandingScreen;
