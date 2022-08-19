import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import type { AuthScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { StyledButton, ButtonContainer } from './styles';

const LandingScreen = ({
  navigation,
}: AuthScreenProps<SCREEN_NAMES.LANDING>) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 35 }}>Nimloth</Text>
      <ButtonContainer>
        <StyledButton
          type='solid'
          title='Sign in'
          onPress={() => navigation.navigate(SCREEN_NAMES.SIGN_IN)}
        />
        <StyledButton
          type='clear'
          title='Sign up'
          onPress={() =>
            navigation.navigate(SCREEN_NAMES.SIGN_UP, {
              screen: SCREEN_NAMES.EMAIL,
            })
          }
        />
      </ButtonContainer>
    </SafeAreaView>
  );
};

export default LandingScreen;
