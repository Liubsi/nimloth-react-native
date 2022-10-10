import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { SignUpScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { useAppDispatch } from '../../../../store/hooks';
import { setUserBirthdate } from '../signUpSlice';
import { StyledInput, StyledButton } from '../styles';

const DOBScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.DOB>) => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your date of birth?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput
          autoFocus
          placeholder='MM / DD / YYYY'
          onChangeText={(val) => {
            dispatch(setUserBirthdate(val));
          }}
        />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate('Address')}
        />
      </View>
    </SafeAreaView>
  );
};

export default DOBScreen;
