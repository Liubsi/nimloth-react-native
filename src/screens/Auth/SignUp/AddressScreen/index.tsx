import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { SignUpScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { useAppDispatch } from '../../../../store/hooks';
import { setUserAddress } from '../signUpSlice';
import { StyledInput, StyledButton } from '../styles';

const AddressScreen = ({
  navigation,
}: SignUpScreenProps<SCREEN_NAMES.ADDRESS>) => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Enter your address</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput
          autoFocus
          placeholder='Address'
          onChangeText={(val) => {
            dispatch(setUserAddress(val));
          }}
        />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate('Confirm')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddressScreen;
