import React, { useState } from 'react';
import { Button, Input } from '@rneui/themed';
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInput,
} from 'react-native';
import NavigationContainer from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import { CustomText, LoginBackground, SizedBox } from '../../components';
import { loadFonts } from '../../fonts';
import { RootStackParamList } from './RootStackParams';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';

import AuthContext, { useUser } from '../../AuthContext';
type SignInProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
import { Auth } from 'aws-amplify';

async function signIn() {
    try {
        const user = await Auth.signIn("johnb", "12345678");
        
    } catch (error) {
        console.log('error signing in', error);
    }
}
const SignInScreen = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const navigation = useNavigation<SignInProp>();
  const fontsLoaded = loadFonts();
  return (
  
    <LoginBackground>
     
     <CustomText style={{ color: 'white', fontSize: 35 }} textType='bold'>
        
        Login
      </CustomText>
      <SizedBox height={50} />
      <View style={styles.loginView}>
      <Input
          placeholder="Enter username"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      <Input
          placeholder="Enter password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <SizedBox height={50} />
      <Button
        buttonStyle={styles.button}
        titleStyle={{ color: 'white', fontSize: 12, fontFamily: 'Raleway' }}
        title='Sign In(then reload page)'
        onPress={() => Auth.signIn(email, password)}
      />
      
    </LoginBackground>
    
  );
};

export default SignInScreen;
