import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { SignUpParamList, SignUpScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import {
  validatePassword,
  validateEmail,
  validatePhoneNumber,
} from '@common/rules';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
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
import { StyledInput, StyledButton, CheckIcon, XIcon } from './styles';

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
      setMatchesRequirement(true);
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

  const storeData = async (cognitoUser: any) => {
    try {
      AsyncStorage.setItem('@CognitoUser', cognitoUser);
      return cognitoUser;
    } catch (error) {
      return error;
    }
  };
  const onConfirm = async () => {
    dispatch(signUp(signUpInfo))
      .unwrap()
      .then((cognitoUser) => {
        // console.log(cognitoUser.getUserAttributes(() => console.log("HELLO")));
        // console.log(cognitoUser.getUserData(() => console.log("HELLO")))
        // console.log(cognitoUser.getSignInUserSession());
        const username = cognitoUser.getUsername();
        storeData(username);
        // console.log(cognitoUser.getSession(() => console.log("HELLO")));
      })
      .catch((error) => {
        // TODO: Throw error on UI
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
