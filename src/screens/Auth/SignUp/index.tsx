import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { SignUpParamList, SignUpScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { validatePassword } from '@common/rules';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { StyledInput, StyledButton, CheckIcon, XIcon } from './styles';
import {
  signUp,
  setUserBirthdate,
  setUserEmail,
  setUserPassword,
  setUserPhoneNumber,
  getSignUpFields,
  setUserFirstName,
  setUserLastName,
  setUserAddress,
} from './signUpSlice';

export type SignUpUser = {
  firstName: string;
  lastName: string;
  password: string;
  email: string; // make optional?
  phoneNumber: string; // make optional?
  birthdate: string;
  address: string;
};
// Current flow:
// Email -> Password -> Legal Name -> Phone Number -> Date of birth -> Address
// Add?: Citizenship, PIN, Verify PIN, Verify Phone Number/Email

// EXAMPLE
const todo = {
  firstName: 'test',
  lastName: 'test',
  password: 'testpassword',
  email: 'testuser2@gmail.com', // optional
  phoneNumber: '+11111111111', // optional - E.164 number convention
  birthdate: '01/01/2000',
  address: 'test',
  // other custom attributes
};

const EmailScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.EMAIL>) => {
  const dispatch = useAppDispatch();

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
            dispatch(setUserEmail(val));
          }}
        />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate(SCREEN_NAMES.PASSWORD)}
        />
      </View>
    </SafeAreaView>
  );
};

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

  const validatePasswordInputs = () => {
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
        <StyledButton
          title='Continue'
          onPress={() => validatePasswordInputs()}
        />
      </View>
    </SafeAreaView>
  );
};

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

const PhoneScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.PHONE>) => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your phone number?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput
          autoFocus
          placeholder='Phone number'
          onChangeText={(val) => {
            dispatch(setUserPhoneNumber(val));
          }}
        />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate(SCREEN_NAMES.DOB)}
        />
      </View>
    </SafeAreaView>
  );
};

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

// TODO: collect user Address
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

// TODO: Add data for confirmation screen
const ConfirmScreen = ({
  navigation,
}: SignUpScreenProps<SCREEN_NAMES.CONFIRM>) => {
  const dispatch = useAppDispatch();
  const signUpInfo = useAppSelector(getSignUpFields);

  const onConfirm = async () => {
    const signUpUser = await dispatch(signUp(signUpInfo));
    console.log(signUpUser);
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

// TODO: Add a welcome screen

const SignUpScreen = () => {
  const SignUpStack = createNativeStackNavigator<SignUpParamList>();

  return (
    <SignUpStack.Navigator
      initialRouteName={SCREEN_NAMES.EMAIL}
      screenOptions={{ headerShown: false }}
    >
      <SignUpStack.Screen name={SCREEN_NAMES.EMAIL} component={EmailScreen} />
      <SignUpStack.Screen
        name={SCREEN_NAMES.PASSWORD}
        component={PasswordScreen}
      />
      <SignUpStack.Screen name={SCREEN_NAMES.NAME} component={NameScreen} />
      <SignUpStack.Screen name={SCREEN_NAMES.PHONE} component={PhoneScreen} />
      <SignUpStack.Screen name={SCREEN_NAMES.DOB} component={DOBScreen} />
      <SignUpStack.Screen
        name={SCREEN_NAMES.ADDRESS}
        component={AddressScreen}
      />
      <SignUpStack.Screen
        name={SCREEN_NAMES.CONFIRM}
        component={ConfirmScreen}
      />
    </SignUpStack.Navigator>
  );
};

export default SignUpScreen;
