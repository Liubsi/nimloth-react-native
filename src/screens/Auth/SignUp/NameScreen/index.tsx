import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { SignUpScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { useAppDispatch } from '../../../../store/hooks';
import { setUserFirstName, setUserLastName } from '../signUpSlice';
import { StyledInput, StyledButton } from '../styles';

const NameScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.NAME>) => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your legal name?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput
          autoFocus
          placeholder='First name'
          onChangeText={(val) => {
            dispatch(setUserFirstName(val));
          }}
        />
        <StyledInput
          placeholder='Last name'
          onChangeText={(val) => {
            dispatch(setUserLastName(val));
          }}
        />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate(SCREEN_NAMES.PHONE)}
        />
      </View>
    </SafeAreaView>
  );
};

export default NameScreen;
