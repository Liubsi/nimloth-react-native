import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { SignUpScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { validateEmail } from '@common/rules';
import { useAppDispatch } from '../../../../store/hooks';
import { setUserEmail } from '../signUpSlice';
import { StyledInput, StyledButton } from '../styles';

const EmailScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.EMAIL>) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');

  const onContinue = () => {
    if (validateEmail(email)) {
      navigation.navigate(SCREEN_NAMES.PASSWORD);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your email address?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput
          autoFocus
          placeholder='Email'
          onChangeText={(val) => {
            setEmail(val);
            dispatch(setUserEmail(val));
          }}
        />
        <StyledButton title='Continue' onPress={() => onContinue()} />
      </View>
    </SafeAreaView>
  );
};

export default EmailScreen;
