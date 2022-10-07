import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { SignUpScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { validatePassword } from '@common/rules';
import { useAppDispatch } from '../../../../store/hooks';
import { setUserPassword } from '../signUpSlice';
import { StyledInput, StyledButton, CheckIcon, XIcon } from '../styles';

const PasswordScreen = ({
  navigation,
}: SignUpScreenProps<SCREEN_NAMES.PASSWORD>) => {
  const dispatch = useAppDispatch();
  const [firstPassword, setFirstPassword] = useState<string>('');
  const [secondPassword, setSecondPassword] = useState<string>('');
  const [matchesRequirements, setMatchesRequirement] = useState(false);
  const [matchesSecondPassword, setMatchesSecondPassword] = useState(false);

  useEffect(() => {
    if (validatePassword(firstPassword)) {
      setMatchesRequirement(true);
    } else {
      setMatchesRequirement(false);
    }

    if (firstPassword === secondPassword && firstPassword !== '') {
      setMatchesSecondPassword(true);
    } else {
      setMatchesSecondPassword(false);
    }
  }, [firstPassword, secondPassword]);

  const onContinue = () => {
    if (matchesRequirements) {
      navigation.navigate(SCREEN_NAMES.NAME);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Create your Nimloth password</Text>
        <View
          style={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            marginTop: 30,
            width: '100%',
          }}
        >
          <View style={{ width: 35 }}>
            {matchesRequirements ? <CheckIcon /> : <XIcon />}
          </View>
          <Text>
            Your password must contain at least 8 characters, one letter, one
            number, and one special character
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 20,
            width: '100%',
          }}
        >
          <View style={{ width: 35 }}>
            {matchesSecondPassword ? <CheckIcon /> : <XIcon />}
          </View>
          <Text>Your passwords must match</Text>
        </View>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput
          secureTextEntry
          autoFocus
          placeholder='Password'
          onChangeText={(val) => {
            setFirstPassword(val);
            dispatch(setUserPassword(val));
          }}
        />
        <StyledInput
          secureTextEntry
          placeholder='Re-enter password'
          onChangeText={(val) => setSecondPassword(val)}
        />
        <StyledButton title='Continue' onPress={() => onContinue()} />
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;
