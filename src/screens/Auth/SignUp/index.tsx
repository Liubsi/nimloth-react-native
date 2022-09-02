import React from 'react';
import { Auth } from 'aws-amplify';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { SignUpScreenProps } from '@navigation/types';
import SCREEN_NAMES from '@navigation/names';
import { StyledInput, StyledButton } from './styles';
import Todo from '../../../models/index';

// Current flow:
// Email -> Password -> Legal Name -> Phone Number -> Date of birth -> Address
// Add?: Citizenship, PIN, Verify PIN, Verify Phone Number/Email
const todo = {
  username: 'testuser@gmail.com',
  password: 'testpassword',
  email: 'testuser@gmail.com', // optional
  phone_number: '+11111111111', // optional - E.164 number convention
  birthdate: '01/01/2000',
  name: 'usertest',
  // other custom attributes
};

function setvalue(value: string) {
  todo.username = value;
  return null;
}

async function signUp() {
  try {
    const { user } = await Auth.signUp({
      username: todo.username,
      password: todo.password,
      attributes: {
        email: todo.username, // optional
        phone_number: todo.phone_number, // optional - E.164 number convention
        birthdate: todo.birthdate,
        name: todo.name,
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

const EmailScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.EMAIL>) => {
  const [text, setUser] = React.useState('email');
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your email address?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput
          autoFocus
          placeholder='Email'
          onChangeText={(value) => setUser(value)}
          value={text}
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
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Create your Nimloth password</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput autoFocus placeholder='Password' />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate(SCREEN_NAMES.NAME)}
        />
      </View>
    </SafeAreaView>
  );
};

const NameScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.NAME>) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your legal name?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput autoFocus placeholder='First name' />
        <StyledInput placeholder='Last name' />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate(SCREEN_NAMES.PHONE)}
        />
      </View>
    </SafeAreaView>
  );
};

const PhoneScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.PHONE>) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your phone number?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput autoFocus placeholder='Phone number' />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate(SCREEN_NAMES.DOB)}
        />
      </View>
    </SafeAreaView>
  );
};

const DOBScreen = ({ navigation }: SignUpScreenProps<SCREEN_NAMES.DOB>) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your date of birth?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput autoFocus placeholder='MM / DD / YYYY' />
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
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Enter your address</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput autoFocus placeholder='Address' />
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
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Confirm your details</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledButton title='Complete sign up' onPress={() => signUp()} />
      </View>
    </SafeAreaView>
  );
};

// TODO: Add a welcome screen

const SignUpScreen = () => {
  const SignUpStack = createNativeStackNavigator();

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
