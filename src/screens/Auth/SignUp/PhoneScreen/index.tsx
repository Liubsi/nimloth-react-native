import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { SignUpScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { validatePhoneNumber } from '@common/rules';
import { setUserPhoneNumber } from '../signUpSlice';
import { StyledInput, StyledButton } from '../styles';
import { useAppDispatch } from '../../../../store/hooks';

// TODO: Allow changing of area code?
const PhoneScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.PHONE>) => {
  const dispatch = useAppDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');

  const onContinue = () => {
    if (validatePhoneNumber(phoneNumber)) {
      navigation.navigate(SCREEN_NAMES.DOB);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your phone number?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '14%', marginRight: '2%' }}>
            <StyledInput value='+1' disabled />
          </View>
          <View style={{ width: '84%' }}>
            <StyledInput
              autoFocus
              placeholder='Phone number'
              onChangeText={(val) => {
                setPhoneNumber(val);
                dispatch(setUserPhoneNumber(val));
              }}
            />
          </View>
        </View>
        <StyledButton title='Continue' onPress={() => onContinue()} />
      </View>
    </SafeAreaView>
  );
};

export default PhoneScreen;
