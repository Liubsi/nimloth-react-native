import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import type { AuthScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { withAuthenticator } from 'aws-amplify-react-native';
import { StyledButton, ButtonContainer } from './styles';

const SignInScreen = ({
  navigation,
}: AuthScreenProps<SCREEN_NAMES.SIGN_IN>) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 35 }}>Nimloth</Text>
      <ButtonContainer>
        <StyledButton
          type='solid'
          title='Sign in'
          onPress={() => navigation.navigate(SCREEN_NAMES.WALLET)}
        />
      </ButtonContainer>
    </SafeAreaView>
  );
};

export default withAuthenticator(SignInScreen);
