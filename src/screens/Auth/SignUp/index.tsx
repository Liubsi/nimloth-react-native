import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { RootStackParamList } from '../RootStackParams';
import { StyledInput, StyledButton } from './styles';

// Current flow:
// Email -> Password -> Legal Name -> Phone Number -> Date of birth -> Address
// Add?: Citizenship, PIN, Verify PIN, Verify Phone Number/Email

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const EmailScreen = ({ navigation }: ScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your email address?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput autoFocus placeholder='Email' />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate('Password')}
        />
      </View>
    </SafeAreaView>
  );
};

const PasswordScreen = ({ navigation }: ScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Create your Nimloth password</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput autoFocus placeholder='Password' />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate('Name')}
        />
      </View>
    </SafeAreaView>
  );
};

const NameScreen = ({ navigation }: ScreenProps) => {
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
          onPress={() => navigation.navigate('Phone')}
        />
      </View>
    </SafeAreaView>
  );
};

const PhoneScreen = ({ navigation }: ScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>What is your phone number?</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledInput autoFocus placeholder='Phone number' />
        <StyledButton
          title='Continue'
          onPress={() => navigation.navigate('DOB')}
        />
      </View>
    </SafeAreaView>
  );
};

const DOBScreen = ({ navigation }: ScreenProps) => {
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

const AddressScreen = ({ navigation }: ScreenProps) => {
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
const ConfirmScreen = ({ navigation }: ScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ margin: 50 }}>
        <Text style={{ fontSize: 25 }}>Confirm your details</Text>
      </View>
      <View style={{ width: '80%', alignItems: 'center' }}>
        <StyledButton
          title='Complete sign up'
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    </SafeAreaView>
  );
};

// TODO: Add a welcome screen

const SignUpScreen = () => {
  const SignUpStack = createNativeStackNavigator();

  return (
    <SignUpStack.Navigator
      initialRouteName='Email'
      screenOptions={{ headerShown: false }}
    >
      <SignUpStack.Screen name='Email' component={EmailScreen} />
      <SignUpStack.Screen name='Password' component={PasswordScreen} />
      <SignUpStack.Screen name='Name' component={NameScreen} />
      <SignUpStack.Screen name='Phone' component={PhoneScreen} />
      <SignUpStack.Screen name='DOB' component={DOBScreen} />
      <SignUpStack.Screen name='Address' component={AddressScreen} />
      <SignUpStack.Screen name='Confirm' component={ConfirmScreen} />
    </SignUpStack.Navigator>
  );
};

export default SignUpScreen;
