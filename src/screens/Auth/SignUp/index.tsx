import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { SignUpParamList, SignUpScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { StyledInput, StyledButton } from './styles';
import {
  signUp,
  setUserBirthdate,
  setUserEmail,
  setUserPassword,
  setUserPhoneNumber,
  getSignUpFields,
  setUserFirstName,
  setUserLastName,
} from './signUpSlice';

export type SignUpUser = {
  firstName: string;
  lastName: string;
  password: string;
  email: string; // make optional?
  phoneNumber: string; // make optional?
  birthdate: string;
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
  name: 'usertest',
  // other custom attributes
};

const EmailScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.EMAIL>) => {
  const [email, setEmail] = React.useState<string>();
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
            setEmail(val);
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
  const [password, setPassword] = React.useState<string>();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Create your Nimloth password</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput
          autoFocus
          placeholder='Password'
          onChangeText={(val) => {
            setPassword(val);
            setUserPassword(val);
          }}
        />
        <StyledInput placeholder='Re-enter password' />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate(SCREEN_NAMES.NAME)}
        />
      </View>
    </SafeAreaView>
  );
};

const NameScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.NAME>) => {
  const [firstName, setFirstName] = React.useState<string>();
  const [lastName, setLastName] = React.useState<string>();

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
            setFirstName(val);
            setUserFirstName(val);
          }}
        />
        <StyledInput
          placeholder='Last name'
          onChangeText={(val) => {
            setLastName(val);
            setUserLastName(val);
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
  const [phoneNumber, setPhoneNumber] = React.useState<string>();

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
            setPhoneNumber(val);
            setUserPhoneNumber(val);
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
  const [DOB, setDOB] = React.useState<string>();

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
            setDOB(val);
            setUserBirthdate(val);
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
  const [address, setAddress] = React.useState<string>();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Enter your address</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput
          autoFocus
          placeholder='Address'
          onChangeText={(val) => setAddress(val)}
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
  const a = useAppSelector(getSignUpFields);
  console.log(a);

  const onConfirm = async () => {
    const signUpUser = await dispatch(signUp(todo));
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
