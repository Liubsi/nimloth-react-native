import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { SignUpScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setIsSignedIn } from '../../SignIn/signInSlice';
import { signUp, getSignUpFields } from '../signUpSlice';
import { StyledButton } from '../styles';

// TODO: Add data for confirmation screen
const ConfirmScreen = ({
  navigation,
}: SignUpScreenProps<SCREEN_NAMES.CONFIRM>) => {
  const dispatch = useAppDispatch();
  const signUpInfo = useAppSelector(getSignUpFields);

  const onConfirm = async () => {
    dispatch(signUp(signUpInfo))
      .then(({ meta }) => {
        if (meta.requestStatus === 'fulfilled') {
          dispatch(setIsSignedIn(true));
        } else {
          console.warn('Something went wrong.');
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Confirm your details</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledButton title='Complete sign up' onPress={onConfirm} />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmScreen;
