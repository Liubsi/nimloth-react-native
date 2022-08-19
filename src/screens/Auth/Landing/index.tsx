import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '@rneui/themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../RootStackParams';
import { StyledButton, ButtonContainer } from './styles';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Landing'>;

const LandingScreen = () => {
  const navigation = useNavigation<LoginScreenProp>();

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
